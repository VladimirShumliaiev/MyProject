import React from 'react';
import {useSelector} from "react-redux";
import OneLessonsListItem from "./OneLessonsListItem";

const OneLessonsList = () => {
    const oneLessons = useSelector(state => state.oneLessons.oneLessons);

    return (
        <div>
            {
                oneLessons.map(e => <OneLessonsListItem
                    key={e.id}
                    {...e}
               />)
            }
        </div>
    );
};

export default OneLessonsList;