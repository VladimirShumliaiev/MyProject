import React from 'react';
import {Route, Routes} from "react-router-dom";
import OneLessons from "../One Lessons/OneLessons";
import TwoLessons from "../Two Lessons/TwoLessons";

const RouterReactLessons = () => {
    return (
            <Routes>
                <Route>
                    <Route path={'oneLessons'} element={<OneLessons/>}/>
                    <Route path={'twoLessons'} element={<TwoLessons/>}/>
                </Route>
            </Routes>
    );
};

export default RouterReactLessons;