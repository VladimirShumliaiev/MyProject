import React from 'react';
import {useSelector} from "react-redux";
import ThreeLessonsListItem from "./ThreeLessonsListItem";

const ThreeLessonsList = () => {
    const selector = useSelector(state => state.threeLessons.threeTodo)
    return (
        <div>
            {
                selector.map(e => <ThreeLessonsListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default ThreeLessonsList;