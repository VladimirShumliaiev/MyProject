import React from 'react';
import {Route, Routes} from "react-router-dom";
import OneLessons from "../Lessons/One Lessons/OneLessons";
import TwoLessons from "../Lessons/Two Lessons/TwoLessons";
import ThreeLessons from "../Lessons/Three Lessons/Three Lessons";
import FourthLessons from "../Lessons/Fourth Lessons/FourthLessons";
import Counter from "../Lessons/Fifth lesson - Counter/Counter";
import ModelWindow from "../Lessons/Sixth lesson - model window/ModelWindow";

const RouterReactLessons = () => {
    return (
        <Routes>
            <Route path={'/oneLessons'} element={<OneLessons/>}/>
            <Route path={'/twoLessons'} element={<TwoLessons/>}/>
            <Route path={'/threeLessons'} element={<ThreeLessons/>}/>
            <Route path={'/fourLessons'} element={<FourthLessons/>}/>
            <Route path={'/FifthLessons'} element={<Counter/>}/>
            <Route path={'/SixthLessons'} element={<ModelWindow/>}/>
        </Routes>
    );
};

export default RouterReactLessons;