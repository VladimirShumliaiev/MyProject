import React from 'react';
import {NavLink} from "react-router-dom";

const NavLinkReactLessons = () => {
    const setIsActive = ({isActive}) => isActive ? 'active-link-lessons' : '';
    return (

            <ol>
                <li>
                    <NavLink to={'oneLessons'} className={setIsActive}>One Lessons</NavLink>
                </li>
                <li>
                    <NavLink to={'twoLessons'} className={setIsActive}>Two Lessons</NavLink>
                </li>
            </ol>

    );
};

export default NavLinkReactLessons;