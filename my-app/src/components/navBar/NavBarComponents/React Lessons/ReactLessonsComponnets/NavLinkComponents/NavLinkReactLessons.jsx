import React from 'react';
import {NavLink} from "react-router-dom";

const NavLinkReactLessons = () => {

    return (
        <div>
            <ol>
                <li>
                    <NavLink to={'/oneLessons'}>One Lessons</NavLink>
                </li>

                <li>
                    <NavLink to={'/twoLessons'}>Two Lessons</NavLink>
                </li>
                <li>
                    <NavLink to={'/threeLessons'}>Three Lessons</NavLink>
                </li>
            </ol>

        </div>
    );
};

export default NavLinkReactLessons;