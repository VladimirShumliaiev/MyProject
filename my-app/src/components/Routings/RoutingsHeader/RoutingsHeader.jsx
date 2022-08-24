import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from "../../header/HeaderComponnents/Home/Home";
import Blog from "../../header/HeaderComponnents/Blog/Blog";
import AboutUs from "../../header/HeaderComponnents/AboutUs/AboutUs";
import Test from "../../header/HeaderComponnents/Test/Test";

const RoutingsHeader = () => {
    return (
            <Routes>
                <Route>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'blog'} element={<Blog/>}/>
                    <Route path={'aboutUs'} element={<AboutUs/>}/>
                    <Route path={'test'} element={<Test/>}/>
                </Route>
            </Routes>
    );
};

export default RoutingsHeader;