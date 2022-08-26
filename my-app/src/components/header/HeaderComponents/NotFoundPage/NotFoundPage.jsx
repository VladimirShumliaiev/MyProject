import React from 'react';
import {NavLink} from "react-router-dom";
import style from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return (
        <div className={style.item}>
            This page doesn't exist.Go <NavLink to={'/'}>home</NavLink>
        </div>
    );
};

export default NotFoundPage;