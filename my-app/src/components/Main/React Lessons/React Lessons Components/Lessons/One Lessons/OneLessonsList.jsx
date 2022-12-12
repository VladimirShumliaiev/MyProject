import React from 'react';
import {useSelector} from "react-redux";
import OneLessonsListItem from "./OneLessonsListItem";

const OneLessonsList = () => {
    const todoList = useSelector(state => state.oneLessons.todo)
    return (
        <div>
            {
                todoList.map(e => <OneLessonsListItem key={e.id}{...e}/>)
            }
        </div>
    );
};

export default OneLessonsList;