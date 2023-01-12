import React from 'react';
import {Route, Routes} from "react-router-dom";
import OneTest from "./OneTest";
import Two from "./Two";

const TestRouting = () => {
    return (
            <Routes>
                <Route path={'oneTest'} element={<OneTest/>}/>
                <Route path={'twoTest'} element={<Two/>}/>
            </Routes>
    );
};

export default TestRouting;