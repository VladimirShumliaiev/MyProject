import React from 'react';
import {Route, Routes} from "react-router-dom";
import OneLessons from "../../../Main/NavBar Components/React Lessons/ReactLessonsComponnets/One Lessons/OneLessons";
import TwoLessons from "../../../Main/NavBar Components/React Lessons/ReactLessonsComponnets/Two Lessons/TwoLessons";

const RoutingsReactLessons = () => {
    return (
            <div>
                <Routes>
                        <Route path={'/oneLessons'} element={<OneLessons />}/>
                        <Route path={'/twoLessons'} element={<TwoLessons />}/>
                </Routes>
            </div>
    );

};

export default RoutingsReactLessons;