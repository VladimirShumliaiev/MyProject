import React, {useState} from 'react';
import './OneLessons.css';
import {useDispatch} from "react-redux";
import {addText} from "../../../../../../Redux/Slices/oneLessonsSlice";
import OneLessonsInputField from "./OneLessonsInputField";
import OneLessonsList from "./OneLessonsList";



const OneLessons = () => {
    const [text,setText] = useState('');
    const dispatch = useDispatch();

    const addTusk = () => {
        dispatch(addText({text}))
        setText('')
    }

    return (
        <div className={'itemOneLessons'}>
            Todo-list:
            <OneLessonsInputField
                text={text}
                setText={setText}
                addTusk={addTusk}
            />
            <OneLessonsList/>

        </div>
    )
};

export default OneLessons;