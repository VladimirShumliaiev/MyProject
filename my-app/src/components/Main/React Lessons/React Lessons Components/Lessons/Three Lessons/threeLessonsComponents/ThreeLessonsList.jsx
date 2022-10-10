import React from 'react';
import {useSelector} from "react-redux";
import ThreeLessonsListItem from "./ThreeLessonsListItem";

const ThreeLessonsList = () => {
    const todoSelector = useSelector(state => state.threeLessons.list)
    return (
        <div>
            {
                todoSelector.map(e => <ThreeLessonsListItem key={e.id}{...e}/>)
            }
        </div>
    );
};

export default ThreeLessonsList;