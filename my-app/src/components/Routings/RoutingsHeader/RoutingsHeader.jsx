import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from "../../Main/Header Components/Home/Home";
import Blog from "../../Main/Header Components/Blog/Blog";
import AboutUs from "../../Main/Header Components/AboutUs/AboutUs";
import Test from "../../Main/Header Components/Test/Test";

const RoutingsHeader = () => {
    return (
            <Routes>
                <Route>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'Blog'} element={<Blog/>}/>
                    <Route path={'AboutUs'} element={<AboutUs/>}/>
                    <Route path={'Test'} element={<Test/>}/>
                </Route>
            </Routes>
    );
};

export default RoutingsHeader;