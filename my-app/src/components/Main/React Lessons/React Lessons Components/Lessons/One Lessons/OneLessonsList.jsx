import React from 'react';
import {useSelector} from "react-redux";
import OneLessonsListItem from "./OneLessonsListItem";

const OneLessonsList = () => {
    const selectorList = useSelector(state => state.oneLessons.todos)
    return (
        <div>
            {
                selectorList.map(e => <OneLessonsListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default OneLessonsList;