import React from 'react';
import {useSelector} from "react-redux";
import OneLessonsListItem from "./OneLessonsListItem";

const OneLessonsList = () => {
    const listSelector = useSelector(state => state.oneLessons.todos)
    return (
        <div>
            {
                listSelector.map(e => <OneLessonsListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default OneLessonsList;