
import UserItem from "./userItem.jsx";
import {useContext} from "react";
import GitHubContext from "../../context/github/GitHubContext.jsx";

function UserResults(props) {
   const {users, loading} = useContext(GitHubContext)





    return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 mg:grid-cols-2">
            {users.map((user)=>(
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
}

export default UserResults;