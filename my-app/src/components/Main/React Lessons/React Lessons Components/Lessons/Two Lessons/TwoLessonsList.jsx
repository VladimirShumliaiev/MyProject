import React from 'react';
import {useSelector} from "react-redux";
import TwoLessonsListItem from "./TwoLessonsListItem";

const TwoLessonsList = () => {
    const TLSelector = useSelector(state => state.twoLessons.todos)
    return (
        <ol>
            {
                TLSelector.map(e => <TwoLessonsListItem key={e.id} {...e}/>)
            }
        </ol>
    );
};

export default TwoLessonsList;