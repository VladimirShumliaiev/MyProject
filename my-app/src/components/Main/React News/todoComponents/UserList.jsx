import React from 'react';
import {useSelector} from "react-redux";
import UserItem from "./UserItem";

const UserList = () => {
    const selector = useSelector(state => state.users.user)
    return (
        <div>
            {
               selector.map(e => <UserItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default UserList;