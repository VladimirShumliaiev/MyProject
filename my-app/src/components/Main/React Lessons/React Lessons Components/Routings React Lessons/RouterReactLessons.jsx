import React from 'react';
import {Route, Routes} from "react-router-dom";
import OneLessons from "../Lessons/One Lessons/OneLessons";
import TwoLessons from "../Lessons/Two Lessons/TwoLessons";
import ThreeLessons from "../Lessons/Three Lessons/Three Lessons";
import FourLessons from "../Lessons/FourLessons/FourLessons";

const RouterReactLessons = () => {
    return (
        <Routes>
            <Route path={'/oneLessons'} element={<OneLessons/>}/>
            <Route path={'/twoLessons'} element={<TwoLessons/>}/>
            <Route path={'/threeLessons'} element={<ThreeLessons/>}/>
            <Route path={'/fourLessons'} element={<FourLessons/>}/>
        </Routes>
    );
};

export default RouterReactLessons;