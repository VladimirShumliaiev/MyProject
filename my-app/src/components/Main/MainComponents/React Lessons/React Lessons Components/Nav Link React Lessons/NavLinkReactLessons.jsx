import React from 'react';
import {NavLink} from "react-router-dom";

const NavLinkReactLessons = () => {

    return (
        <div>
            <h3>
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
            </h3>
        </div>
    );
};

export default NavLinkReactLessons;