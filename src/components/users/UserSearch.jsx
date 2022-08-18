import React, {useState, useContext} from 'react';
import gitHubContext from "../../context/github/GitHubContext.jsx";
import AlertContext from "../../context/alert/AlertContext.jsx";
import {searchUsers} from "../../context/github/GitHubActions.jsx";

function UserSearch(props) {
    const [text, setText] = useState('')
    const handleChange =(e)=> {
        setText(e.target.value)
    }
    const {setAlert} = useContext(AlertContext)
    const {users,  dispatch} = useContext(gitHubContext)
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(text==="") {
            setAlert("Please enter something", 'error')
        } else {
            dispatch({type: 'SET_LOADING'})
            const users = await searchUsers(text)
            dispatch({type: 'GET_USERS', payload: users})

            setText('')
        }
    }
    return (
        <div className="grid grid-cols-1 xl:grid grid-cols-2 lg:grid grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black"
                            placeholder="Search" value={text} onChange={handleChange}/>
                            <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                GO
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (<div>
                <button onClick={()=> dispatch({type: 'CLEAR_USERS'})} className="btn btn-ghost btn-lg">Clear</button>
            </div>)}

        </div>
    );
}

export default UserSearch;