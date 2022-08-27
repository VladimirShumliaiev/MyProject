import React from 'react';
import {useSelector} from "react-redux";
import OneLessonsItem from "./OneLessonsItem";

const OneLessonsList = () => {
    const oneLessons = useSelector(state => state.oneLessons.oneLessons);

    return (
        <div>
            {
                oneLessons.map(e => <OneLessonsItem
                    key={e.id}
                    {...e}
               />)
            }
        </div>
    );
};

export default OneLessonsList;