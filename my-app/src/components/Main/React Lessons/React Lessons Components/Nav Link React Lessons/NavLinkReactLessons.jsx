import React from 'react';
import {NavLink} from "react-router-dom";

const NavLinkReactLessons = () => {
    return (
        <div>
            <h3>
                <ol>
                    <li>
                        <NavLink to={'ReactLessons//oneLessons'}>One Lessons - React RTK</NavLink>
                    </li>

                    <li>
                        <NavLink to={'ReactLessons//twoLessons'}>Two Lessons - Redux Async</NavLink>
                    </li>
                    <li>
                        <NavLink to={'ReactLessons//threeLessons'}>Three Lessons</NavLink>
                    </li>
                    <li>
                        <NavLink to={'ReactLessons//fourLessons'}>Four Lessons</NavLink>
                    </li>
                    <li>
                        <NavLink to={'ReactLessons//FifthLessons'}>Fifth lesson - Counter</NavLink>
                    </li>
                    <li>
                        <NavLink to={'ReactLessons//SixthLessons'}>Sixth lesson - Model window</NavLink>
                    </li>
                    <li>
                        <NavLink to={'ReactLessons//SeventhLesson'}>Seventh lesson - Quiz</NavLink>
                    </li>
                </ol>
            </h3>
        </div>
    );
};

export default NavLinkReactLessons;