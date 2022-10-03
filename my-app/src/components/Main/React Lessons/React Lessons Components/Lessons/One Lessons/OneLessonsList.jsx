import React from 'react';
import {useSelector} from "react-redux";
import OneLessonsListItem from "./OneLessonsListItem";

const OneLessonsList = () => {
    const selector = useSelector(state => state.oneLessons.todos)
    return (
        <div>
            {
                selector.map(e => <OneLessonsListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default OneLessonsList;