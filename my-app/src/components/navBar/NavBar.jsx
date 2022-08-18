import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css'

function NavBar() {

    const setIsActive = ({isActive}) => isActive ? 'active-link' : '';

    return (
        <div className={'NavBar'}>
            <h3>
                <div>
                    <NavLink to={'ReactLessons'} className={setIsActive}> React Lessons</NavLink>
                </div>
                <div>
                    <NavLink to={'ReactNews'} className={setIsActive}> React News</NavLink>
                </div>
                <div>
                    <NavLink to={'ReactTests'} className={setIsActive}> React Test</NavLink>
                </div>
            </h3>

        </div>
    );
}

export default NavBar;

