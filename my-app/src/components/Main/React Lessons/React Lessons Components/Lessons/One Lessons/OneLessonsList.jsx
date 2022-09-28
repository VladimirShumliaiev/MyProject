import React from 'react';
import {useSelector} from "react-redux";
import OneLessonsListItem from "./OneLessonsListItem";

const OneLessonsList = () => {
    const lessonsSelector = useSelector(state => state.oneLessons.todos)
    return (
        <div>
            {
                lessonsSelector.map(e => <OneLessonsListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default OneLessonsList;