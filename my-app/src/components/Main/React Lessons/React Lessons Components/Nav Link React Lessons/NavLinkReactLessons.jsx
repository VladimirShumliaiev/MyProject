import React from 'react';
import {NavLink} from "react-router-dom";

const NavLinkReactLessons = () => {
    return (
        <div>
            <h3>
                <ol>
                    <li>
                        <NavLink to={'/oneLessons'}>One Lessons - React RTK</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/twoLessons'}>Two Lessons - Redux Async</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/threeLessons'}>Three Lessons</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/fourLessons'}>Four Lessons</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/FifthLessons'}>Fifth lesson - Counter</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/SixthLessons'}>Sixth lesson - Model window</NavLink>
                    </li>
                </ol>
            </h3>
        </div>
    );
};

export default NavLinkReactLessons;