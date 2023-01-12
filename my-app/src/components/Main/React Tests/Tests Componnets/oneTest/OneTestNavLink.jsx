import React from 'react';
import {NavLink} from "react-router-dom";

const OneTestNavLink = () => {
    return (
        <div>
            <NavLink to={'oneTest'}>oneTest</NavLink>
            {' '}
            <NavLink to={'twoTest'}>twoTest</NavLink>
            <hr/>
        </div>
    );
};

export default OneTestNavLink;