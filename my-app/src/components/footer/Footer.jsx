import React from 'react';
import './Footer.css'

import {NavLink} from "react-router-dom";

const Footer = () => {
    const setActive = ({isActive}) => isActive ? 'active-footer' : '';
    return (
        <>
            <div className={'itemLeft'}>
                Footer
            </div>
            <span className={'itemRight'}>
             <NavLink to={'oneFooter'} className={setActive}>{'our website'}{' '}</NavLink>
            </span>
        </>

    );
};

export default Footer;