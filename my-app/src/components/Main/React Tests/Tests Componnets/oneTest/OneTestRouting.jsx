import React from 'react';
import {Route, Routes} from "react-router-dom";
import OneTest from "./OneTest";

const OneTestRouting = () => {
    return (
            <Routes>
                <Route path={'/oneTest'} element={<OneTest/>}/>
            </Routes>
    );
};

export default OneTestRouting;