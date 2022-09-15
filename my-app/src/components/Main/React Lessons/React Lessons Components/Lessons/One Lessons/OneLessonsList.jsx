import React from 'react';
import {useSelector} from "react-redux";
import OneLessonsListItem from "./OneLessonsListItem";

const OneLessonsList = () => {
    const oneLessons = useSelector(state => state.oneLessons.oneLessons);

    return (
        <ol>
            {
                oneLessons.map(e => <OneLessonsListItem
                    key={e.id} {...e}
               />)
            }
        </ol>
    );
};

export default OneLessonsList;