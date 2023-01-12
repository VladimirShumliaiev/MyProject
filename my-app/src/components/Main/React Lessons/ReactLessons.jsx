import React from 'react';
import './ReactLessons.css'
import NavLinkReactLessons from "./React Lessons Components/Nav Link React Lessons/NavLinkReactLessons";
import ListOfLessons from "./React Lessons Components/ List of lessons/ ListOfLessons";
import {Outlet, Route, Routes} from "react-router-dom";
import OneLessons from "./React Lessons Components/Lessons/One Lessons/OneLessons";
import TwoLessons from "./React Lessons Components/Lessons/Two Lessons/TwoLessons";
import ThreeLessons from "./React Lessons Components/Lessons/Three Lessons/Three Lessons";
import FourthLessons from "./React Lessons Components/Lessons/Fourth Lessons/FourthLessons";
import Counter from "./React Lessons Components/Lessons/Fifth lesson - Counter/Counter";
import ModelWindow from "./React Lessons Components/Lessons/Sixth lesson - model window/ModelWindow";
import Quiz from "./React Lessons Components/Lessons/Seventh Lesson/Quiz";


const ReactLessons = () => {

    const isActive = ({isActive}) => isActive ? 'active-link-lessons' : ''
    return (
        <div className={'itemReactLessons'}>
            <>
                React Lessons:
                <NavLinkReactLessons isActive={isActive}/>
                <Routes>
                    <Route path={'oneLessons'} element={<OneLessons/>}/>
                    <Route path={'twoLessons'} element={<TwoLessons/>}/>
                    <Route path={'threeLessons'} element={<ThreeLessons/>}/>
                    <Route path={'fourLessons'} element={<FourthLessons/>}/>
                    <Route path={'FifthLessons'} element={<Counter/>}/>
                    <Route path={'SixthLessons'} element={<ModelWindow/>}/>
                    <Route path={'SeventhLesson'} element={<Quiz/>}/>
                </Routes>
                <Outlet/>
                <ListOfLessons/>
            </>
        </div>
    );
};

export default ReactLessons;