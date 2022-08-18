import {createContext, useReducer} from "react";
import gitHubReducer from "./GitHubReducer.jsx";
const GitHubContext = createContext();



export const GitHubProvider=({children})=> {
    const initialState = {
        users: [],
        user: {},
        repos:[],
        loading: true
    }

    const [state, dispatch] = useReducer(gitHubReducer, initialState)


    return <GitHubContext.Provider value={{...state, dispatch }}>
            {children}
          </GitHubContext.Provider>
}

export default GitHubContext
