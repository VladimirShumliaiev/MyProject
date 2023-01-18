import React from 'react';
import './ReactLessons.css'
import NavLinkReactLessons from "./React Lessons Components/Nav Link React Lessons/NavLinkReactLessons";
import ListOfLessons from "./React Lessons Components/ List of lessons/ ListOfLessons";
import {Outlet} from "react-router-dom";
import RouterReactLessons from "./React Lessons Components/Routings React Lessons/RouterReactLessons";


const ReactLessons = () => {

    const isActive = ({isActive}) => isActive ? 'active-link-lessons' : ''
    return (
        <div className={'itemReactLessons'}>
            <>
                React Lessons:
                <NavLinkReactLessons isActive={isActive}/>
                <RouterReactLessons/>
                {/*<ListOfLessons/>*/}
                <Outlet/>
            </>
        </div>
    );
};

export default ReactLessons;