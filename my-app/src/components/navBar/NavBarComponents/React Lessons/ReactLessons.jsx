import React from 'react';
import './ReactLessons.css'
import {NavLink} from "react-router-dom";
import NavLinkReactLessons from "./ReactLessonsComponnets/NavLinkComponents/NavLinkReactLessons";
import RouterReactLessons from "./ReactLessonsComponnets/RouterReactLessons/RouterReactLessons";


const ReactLessons = () => {

    return (
        <div className={'itemReactLessons'}>
            React Lessons:
                <NavLinkReactLessons />

          <div className={'test'}>
              <RouterReactLessons />
          </div>

        </div>
    );
};

export default ReactLessons;