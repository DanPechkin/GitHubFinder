import React from 'react';
import UserResults from "../components/users/UserResults.jsx";
import userSearch from "../components/users/UserSearch.jsx";
import UserSearch from "../components/users/UserSearch.jsx";

function Home(props) {
    return (
        <div>
            <UserSearch />
            <UserResults />
        </div>
    );
}

export default Home;