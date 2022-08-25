import React from 'react';
import './ReactLessons.css'
import NavLinkReactLessons from "./ReactLessonsComponnets/NavLinkComponents/NavLinkReactLessons";




const ReactLessons = () => {

    return (
        <div className={'itemReactLessons'}>
            <div>
                React Lessons:
                <NavLinkReactLessons />
            </div>
        </div>
    );
};

export default ReactLessons;