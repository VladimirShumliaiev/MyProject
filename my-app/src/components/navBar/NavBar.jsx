import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css'

function NavBar() {

    const setIsActive = ({isActive}) => isActive ? 'active-link' : '';

    return (
        <div className={'NavBar'}>
            <h3>
                <div>
                    <NavLink to={'ReactLessons'} className={setIsActive}>Lessons React</NavLink>
                </div>
                <div>
                    <NavLink to={'ReactNews'} className={setIsActive}>News React</NavLink>
                </div>
                <div>
                    <NavLink to={'ReactTests'} className={setIsActive}>Test React</NavLink>
                </div>
            </h3>

        </div>
    );
}

export default NavBar;


