import React from 'react';
import {useDispatch} from "react-redux";
import {fetchDeleteUser} from "../../../../Redux/Slices/userSlice";
import style from '../ReactNews.module.css'

const UserItem = ({id, name, username, email, address, phone, website, company}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(fetchDeleteUser(id))
    }
    return (
        <div>
            <ol>
                <h2 className={style.userColor}>user: №-{id} </h2>
                <div>name: {name}</div>
                {/*<div>id: {id}</div>*/}
                <div>username: {username}</div>
                <div>email: {email}</div>
                <div className={style.userColor}>address:</div>
                <div>street: {address.street}</div>
                <div>suite: {address.suite}</div>
                <div>city: {address.city}</div>
                <div>zipcode: {address.zipcode}</div>
                <div className={style.userColor}>geo:</div>
                <div>lat: {address.geo.lat}</div>
                <div>lng: {address.geo.lng}</div>
                <div>phone: {phone}</div>
                <div>website: {website}</div>
                <div className={style.userColor}>company:</div>
                <div>name: {company.name}</div>
                <div>catchPhrase: {company.catchPhrase}</div>
                <div>bs: {company.bs}
                    <button onClick={onClick} className={style.delete}>DELETE USER</button>
                </div>
            </ol>
        </div>
    );
};

export default UserItem;