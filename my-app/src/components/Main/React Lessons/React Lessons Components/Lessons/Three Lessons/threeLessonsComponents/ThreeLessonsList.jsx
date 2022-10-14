import React from 'react';
import {useSelector} from "react-redux";
import ThreeLessonsListItem from "./ThreeLessonsListItem";

const ThreeLessonsList = () => {
    const ListSelector = useSelector(state => state.threeLessons.todos)
    return (
        <div>
            {
                ListSelector.map(e => <ThreeLessonsListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default ThreeLessonsList;