import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";

const setIsActive = ({isActive}) => isActive ? 'active-link' : '';


const Header = () => {
    return(
        <>
        <div className={'Header'}>
            <h1>
            <NavLink to={'/'} className={setIsActive}>- Home -</NavLink>
            <NavLink to={'Blog'} className={setIsActive}> Blog -</NavLink>
            <NavLink to={'AboutUs'} className={setIsActive}> AboutUs -</NavLink>
            <NavLink to={'Test'} className={setIsActive}> Tests -</NavLink>
            </h1>
        </div>
        </>
    )
};

export default Header;