import React from 'react';
import {useSelector} from "react-redux";
import TwoLessonsListItem from "./TwoLessonsListItem";


const TwoLessonsList = () => {
    const selector = useSelector(state => state.twoLessons.twoTodo)
    return (
        <div>
            {
                selector.map(event => <TwoLessonsListItem key={event.id} {...event}/>)
            }
        </div>
    );
};

export default TwoLessonsList;