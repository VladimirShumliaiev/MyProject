import React from 'react';
import {Route, Routes} from "react-router-dom";
import ReactNews from "../../navBar/NavBarComponents/ReactNews/ReactNews";
import ReactTests from "../../navBar/NavBarComponents/ReactTests/ReactTests";
import ReactLessons from "../../navBar/NavBarComponents/React Lessons/ReactLessons";


const RoutingsNavBar = () => {
    return (
            <Routes>
                    <Route path={'ReactLessons'} element={<ReactLessons/>}/>
                    <Route path={'ReactNews'} element={<ReactNews/>}/>
                    <Route path={'ReactTests'} element={<ReactTests/>}/>
            </Routes>
    );
};

export default RoutingsNavBar;