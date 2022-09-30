import React, {useState} from 'react';
import './TwoLessons.css';
import {useDispatch} from "react-redux";
import {addPost} from "../../../../../../Redux/Slices/twoLessonsSlice";
import TwoLessonsInputField from "./TwoLessonsInputField";
import TwoLessonsList from "./TwoLessonsList";

const TwoLessons = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const addTask = () => {
        dispatch(addPost({title}))
        setTitle('')
    }
    return (
        <div className={'itemTwoLessons'}>
           Redux-Async:
            <TwoLessonsInputField title={title} setTitle={setTitle} addPost={addTask}/>
            <TwoLessonsList/>
        </div>
    );
};

export default TwoLessons;