import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import AboutUs from "../AboutUs/AboutUs";
import Test from "../Test/Test";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const RoutingHeader = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'blog'} element={<Blog/>}/>
            <Route path={'aboutUs'} element={<AboutUs/>}/>
            <Route path={'test'} element={<Test/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default RoutingHeader;