import React, {useState} from 'react';
import './TwoLessons.css';
import {useDispatch} from "react-redux";
import {addPost} from "../../../../../../Redux/Slices/twoLessonsSlice";
import TwoLessonsInputField from "./TwoLessonsInputField";
import TwoLessonsList from "./TwoLessonsList";

const TwoLessons = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const addTask = () => {
        dispatch(addPost({text}))
        setText('')
    }
    return (
        <div className={'itemTwoLessons'}>
           Redux-Async:
            <TwoLessonsInputField text={text} setText={setText} addPost={addTask}/>
            <TwoLessonsList/>
        </div>
    );
};

export default TwoLessons;