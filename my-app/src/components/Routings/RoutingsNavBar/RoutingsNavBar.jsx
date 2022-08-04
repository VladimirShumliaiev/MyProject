import React from 'react';
import {Route, Routes} from "react-router-dom";
import TextereaButtonLessons from "../../navBar/NavBarComponents/ReactLessons/Texterea-Button-Lessons/TextereaButtonLessons";
import ReactNews from "../../navBar/NavBarComponents/ReactNews/ReactNews";
import ReactTests from "../../navBar/NavBarComponents/ReactTests/ReactTests";


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