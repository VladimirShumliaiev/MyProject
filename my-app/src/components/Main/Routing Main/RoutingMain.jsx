import React from 'react';
import {Route, Routes} from "react-router-dom";
import ReactNews from "../React News/ReactNews";
import ReactLessons from "../React Lessons/ReactLessons";
import ReactTest from "../React Tests/ReactTest.jsx";


const RoutingMain = () => {
    return (
        <Routes>
            <Route path={'/ReactLessons'} element={<ReactLessons/>}/>
            <Route path={'/ReactNews'} element={<ReactNews/>}/>
            <Route path={'/ReactTests'} element={<ReactTest/>}/>
        </Routes>
    );
};

export default RoutingMain;