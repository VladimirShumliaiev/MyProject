import React from 'react';
import './Footer.css'

import {NavLink} from "react-router-dom";

const Footer = () => {
    const footerList =  [{name: 'one', path: '/oneFooter'}, {name: 'two', path: '/twoFooter'}, {name: 'three', path: '/threeFooter'}]
    const setActive = ({isActive}) => isActive ? 'active-footer' : '';
    return (
        <>
            <span className={'item'}>
                Footer
            </span>
            <span className={'itemRight'}>
              {
                  footerList.map((e) => <NavLink to={e.path} key={e.name} className={setActive}>{e.name}{' '}</NavLink>)
              }
            </span>
        </>

    );
};

export default Footer;