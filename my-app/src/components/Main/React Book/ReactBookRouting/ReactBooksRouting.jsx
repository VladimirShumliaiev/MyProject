import React from 'react';
import {Route, Routes} from "react-router-dom";
import LessonsOne from "../ReactBookComponents/LessonsOne";
import LessonsTwo from "../ReactBookComponents/LessonsTwo";

const ReactBooksRouting = () => {
    return (
        <div>
            <Routes>
                <Route path={'LessonsOne'} element={<LessonsOne/>}/>
                <Route path={'LessonsTwo'} element={<LessonsTwo/>}/>
            </Routes>
        </div>
    );
};

export default ReactBooksRouting;