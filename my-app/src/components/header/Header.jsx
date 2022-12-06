import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";
import headerList from "./headerList";


const Header = () => {

    const setIsActive = ({isActive}) => isActive ? 'active-link' : '';

    return (
        <>
            <div className={'Header'}>
                <h1>
                    {
                        headerList.map((e) => <NavLink to={e.path} className={setIsActive} key={e.name}>{e.name}{' '}</NavLink> )
                    }
                </h1>
            </div>
        </>
    )
};

export default Header;