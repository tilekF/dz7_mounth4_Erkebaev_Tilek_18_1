import React, {useState} from 'react';
import {UsersList} from "../../component/userList/UserList";

function UserPage(props) {
    const [user, setUser] = useState([])

    const getUser = () => {
        setUser(["Work1", "Work2"])
    }
    return (
        <div>
            <button onClick={getUser}>get</button>
            <UsersList userList={user}/>
        </div>
    );
}

export default UserPage;