import React from 'react';
import {NavLink} from "react-router-dom";
import style from './BackMenu.module.css'

const BackMenu = () => {
    return (
        <div className={style.item}>
           <NavLink to={'/ReactLessons'}><span>Back menu</span></NavLink>
        </div>
    );
};

export default BackMenu;