import React, {useState} from 'react';
import './OneLessons.css'
import {useDispatch} from "react-redux";
import {addTodo} from "../../../../../../Redux/Slices/oneLessonsSlice";
import OneLessonsInputField from "./OneLessonsInputField";
import OneLessonsList from "./OneLessonsList";

const OneLessons = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const addTask = () => {
        dispatch(addTodo({title}))
        setTitle('')
    }
    return (
        <div className={'itemOneLessons'}>
            <OneLessonsInputField title={title} setTitle={setTitle} addTodo={addTask}/>
            <OneLessonsList/>
        </div>
    );
};

export default OneLessons;