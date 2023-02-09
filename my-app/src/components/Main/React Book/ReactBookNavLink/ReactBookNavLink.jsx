import React from 'react';
import {NavLink} from "react-router-dom";

const ReactBookNavLink = () => {
    const isActive = ({isActive}) => isActive ? 'active-link-book' : ''
    return (
        <div>
                <NavLink className={isActive} to={'LessonsOne'}>LessonsOne</NavLink>
                <NavLink className={isActive} to={'LessonsTwo'}> LessonsTwo</NavLink>
        </div>
    );
};

export default ReactBookNavLink;