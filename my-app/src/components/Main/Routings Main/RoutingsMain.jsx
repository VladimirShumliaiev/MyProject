import React from 'react';
import {Route, Routes} from "react-router-dom";
import ReactNews from "../React News/ReactNews";
import ReactTests from "../React Tests/ReactTests";
import ReactLessons from "../React Lessons/ReactLessons";


const RoutingsMain = () => {
    return (
            <Routes>
                    <Route path={'ReactLessons'} element={<ReactLessons/>}/>
                    <Route path={'ReactNews'} element={<ReactNews/>}/>
                    <Route path={'ReactTests'} element={<ReactTests/>}/>
            </Routes>
    );
};

export default RoutingsMain;