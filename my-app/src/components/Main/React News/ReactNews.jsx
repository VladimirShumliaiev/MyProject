import React, {useEffect} from 'react';
import style from './ReactNews.module.css'
import UserList from "./todoComponents/UserList";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../../Redux/Slices/userSlice";

const ReactNews = () => {
    const dispatch = useDispatch()
    const {status, error} = useSelector(state => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    },[dispatch])
    return (
        <div className={style.item}>
            User list:
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>Error:{error}</h2>}
            <UserList/>
        </div>
    );
};

export default ReactNews;