import React from 'react';
import './ReactLessons.css'
import NavLinkReactLessons from "./React Lessons Components/Nav Link React Lessons/NavLinkReactLessons";
import ListOfLessons from "./React Lessons Components/ List of lessons/ ListOfLessons";


const ReactLessons = () => {
    return (
        <div className={'itemReactLessons'}>
            <div>
                React Lessons:
                {/*<NavLinkReactLessons/>*/}
                <ListOfLessons/>
            </div>
        </div>
    );
};

export default ReactLessons;