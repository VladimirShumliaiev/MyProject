import React from 'react';
import {NavLink} from "react-router-dom";

const NavLinkReactLessons = ({isActive}) => {
    return (
        <div>
            <h3>
                <ol>
                    <li>
                        <NavLink className={isActive} to={'oneLessons'}>One Lessons - React RTK</NavLink>
                    </li>

                    <li>
                        <NavLink className={isActive} to={'twoLessons'}>Two Lessons - Redux Async</NavLink>
                    </li>
                    <li>
                        <NavLink className={isActive} to={'threeLessons'}>Three Lessons</NavLink>
                    </li>
                    <li>
                        <NavLink className={isActive} to={'fourLessons'}>Four Lessons</NavLink>
                    </li>
                    <li>
                        <NavLink className={isActive} to={'FifthLessons'}>Fifth lesson - Counter</NavLink>
                    </li>
                    <li>
                        <NavLink className={isActive} to={'SixthLessons'}>Sixth lesson - Model window</NavLink>
                    </li>
                    <li>
                        <NavLink className={isActive} to={'SeventhLesson'}>Seventh lesson - Quiz</NavLink>
                    </li>
                    <li>
                        <NavLink className={isActive} to={'EightLessons'}>Eight lessons - Post</NavLink>
                    </li>
                </ol>
            </h3>
        </div>
    );
};

export default NavLinkReactLessons;