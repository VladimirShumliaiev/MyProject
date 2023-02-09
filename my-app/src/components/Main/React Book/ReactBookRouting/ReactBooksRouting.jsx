import React from 'react';
import {Route, Routes} from "react-router-dom";
import LessonsOne from "../ReactBookComponents/LessonsOne";
import LessonsTwo from "../ReactBookComponents/LessonsTwo";
import LessonsThree from "../ReactBookComponents/LessonsThree";

const ReactBooksRouting = () => {
    return (
        <div>
            <Routes>
                <Route path={'LessonsOne'} element={<LessonsOne/>}/>
                <Route path={'LessonsTwo'} element={<LessonsTwo/>}/>
                <Route path={'LessonsThree'} element={<LessonsThree/>}/>
            </Routes>
        </div>
    );
};

export default ReactBooksRouting;