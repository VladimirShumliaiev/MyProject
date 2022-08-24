import React from 'react';
import {Route, Routes} from "react-router-dom";
import ReactNews from "../../Main/NavBar Components/ReactNews/ReactNews";
import ReactTests from "../../Main/NavBar Components/ReactTests/ReactTests";
import ReactLessons from "../../navBar/NavBarComponents/React Lessons/ReactLessons";


const RoutingsNavBar = () => {
    return (
            <Routes>
                <Route>
                    <Route path={'ReactLessons/*'} element={<ReactLessons/>}/>
                    <Route path={'ReactNews'} element={<ReactNews/>}/>
                    <Route path={'ReactTests'} element={<ReactTests/>}/>
                </Route>
            </Routes>
    );
};

export default RoutingsNavBar;