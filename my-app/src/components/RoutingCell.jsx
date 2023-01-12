import React from 'react';
import RoutingMain from "./Main/Routing Main/RoutingMain";
import RoutingHeader from "./header/HeaderComponents/RoutingHeader/RoutingHeader";
import RouterReactLessons from "./Main/React Lessons/React Lessons Components/Routings React Lessons/RouterReactLessons";
import OneTestRouting from "./Main/React Tests/Tests Componnets/oneTest/OneTestRouting";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Home from "./header/HeaderComponents/Home/Home";
import Blog from "./header/HeaderComponents/Blog/Blog";
import AboutUs from "./header/HeaderComponents/AboutUs/AboutUs";
import Test from "./header/HeaderComponents/Test/Test";
import NotFoundPage from "./header/HeaderComponents/NotFoundPage/NotFoundPage";
import ReactLessons from "./Main/React Lessons/ReactLessons";
import ReactNews from "./Main/React News/ReactNews";
import OneLessons from "./Main/React Lessons/React Lessons Components/Lessons/One Lessons/OneLessons";
import TwoLessons from "./Main/React Lessons/React Lessons Components/Lessons/Two Lessons/TwoLessons";
import ThreeLessons from "./Main/React Lessons/React Lessons Components/Lessons/Three Lessons/Three Lessons";
import FourthLessons from "./Main/React Lessons/React Lessons Components/Lessons/Fourth Lessons/FourthLessons";
import Counter from "./Main/React Lessons/React Lessons Components/Lessons/Fifth lesson - Counter/Counter";
import ModelWindow from "./Main/React Lessons/React Lessons Components/Lessons/Sixth lesson - model window/ModelWindow";
import Quiz from "./Main/React Lessons/React Lessons Components/Lessons/Seventh Lesson/Quiz";
import OneTest from "./Main/React Tests/Tests Componnets/oneTest/OneTest";

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

                    <Route path={'ReactLessons'} element={<ReactLessons/>}>
                        <Route path={'oneLessons'} element={<OneLessons/>}/>
                        <Route path={'twoLessons'} element={<TwoLessons/>}/>
                        <Route path={'threeLessons'} element={<ThreeLessons/>}/>
                        <Route path={'fourLessons'} element={<FourthLessons/>}/>
                        <Route path={'FifthLessons'} element={<Counter/>}/>
                        <Route path={'SixthLessons'} element={<ModelWindow/>}/>
                        <Route path={'SeventhLesson'} element={<Quiz/>}/>
                    </Route>
                    <Route path={'/ReactNews'} element={<ReactNews/>}/>
                    <Route path={'/ReactTests'} element={<Test/>}>
                        <Route path={'oneTest'} element={<OneTest/>}/>
                    </Route>
                </Route>
            </Routes>

        </>
    );
};

export default RoutingCell;