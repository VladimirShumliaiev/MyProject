import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './NavBar.module.css'

function NavBar() {

    const setIsActive = ({isActive}) => isActive ? 'active-link' : '';

    return (
        <div className={style.item}>
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


