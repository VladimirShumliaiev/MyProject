import React from 'react';
import {Route, Routes} from "react-router-dom";
import TextereaButtonLessons from "../../Main/NavBar Components/React Lessons/Texterea-Button-Lessons/TextereaButtonLessons";
import ReactNews from "../../Main/NavBar Components/ReactNews/ReactNews";
import ReactTests from "../../Main/NavBar Components/ReactTests/ReactTests";


const RoutingsNavBar = () => {
    return (
        <Routes>
            <Route>
                <Route path={'ReactLessons'} element={<TextereaButtonLessons />}/>
                <Route path={'ReactNews'} element={<ReactNews />}/>
                <Route path={'ReactTests'} element={<ReactTests/>}/>
            </Route>
        </Routes>
    );
};

export default RoutingsNavBar;