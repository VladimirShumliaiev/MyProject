import React from 'react';
import {useSelector} from "react-redux";
import ThreeLessonsListItem from "./ThreeLessonsListItem";

const ThreeLessonsList = () => {
    const selector = useSelector(state => state.threeLessons.threeTodo)
    return (
        <ol>
            {
                selector.map(e => <ThreeLessonsListItem key={e.id} {...e}/>)
            }
        </ol>
    );
};

export default ThreeLessonsList;