import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Home from "./header/HeaderComponents/Home/Home";
import Blog from "./header/HeaderComponents/Blog/Blog";
import AboutUs from "./header/HeaderComponents/AboutUs/AboutUs";
import Test from "./header/HeaderComponents/Test/Test";
import NotFoundPage from "./header/HeaderComponents/NotFoundPage/NotFoundPage";
import ReactLessons from "./Main/React Lessons/ReactLessons";
import ReactNews from "./Main/React News/ReactNews";
import ReactTest from "./Main/React Tests/ReactTest";
import OurWebsite from "./footer/ourWebsite";
import ReactBook from "./Main/React Book/ReactBook";

const RoutingCell = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'blog'} element={<Blog/>}/>
                    <Route path={'aboutUs'} element={<AboutUs/>}/>
                    <Route path={'test'} element={<Test/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                    <Route path={'ReactLessons/*'} element={<ReactLessons/>}/>
                    <Route path={'ReactNews'} element={<ReactNews/>}/>
                    <Route path={'ReactTests/*'} element={<ReactTest/>}/>
                    <Route path={'oneFooter'} element={<OurWebsite/>}/>
                    <Route path={'ReactBook/*'} element={<ReactBook/>}/>
                </Route>
            </Routes>

        </>
    );
};

export default RoutingCell;