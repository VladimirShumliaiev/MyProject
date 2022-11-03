import React from 'react';
import {Route, Routes} from "react-router-dom";
import OneLessons from "../Lessons/One Lessons/OneLessons";
import TwoLessons from "../Lessons/Two Lessons/TwoLessons";
import ThreeLessons from "../Lessons/Three Lessons/Three Lessons";
import FourthLessons from "../Lessons/Fourth Lessons/FourthLessons";

const RouterReactLessons = () => {
    return (
        <Routes>
            <Route path={'/oneLessons'} element={<OneLessons/>}/>
            <Route path={'/twoLessons'} element={<TwoLessons/>}/>
            <Route path={'/threeLessons'} element={<ThreeLessons/>}/>
            <Route path={'/fourLessons'} element={<FourthLessons/>}/>
        </Routes>
    );
};

export default RouterReactLessons;