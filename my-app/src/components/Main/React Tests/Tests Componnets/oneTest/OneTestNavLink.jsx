import React from 'react';
import {NavLink} from "react-router-dom";

const OneTestNavLink = () => {
    return (
        <div>
            <NavLink to={'/oneTest'}>oneTest</NavLink>
            <hr/>
        </div>
    );
};

export default OneTestNavLink;