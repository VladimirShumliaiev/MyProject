import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import OneLessonsInputField from "./OneLessonsInputField";
import OneLessonsList from "./OneLessonsList";
import {addTodo} from "../../../../../../Redux/Slices/oneLessonsSlice";
import './OneLessons.css'
import OneLessonsSelect from "./OneLessonseSelect";
const OneLessons = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTodo({title}))
        setTitle('')
    }

    return (
        <div className={'itemOneLessons'}>
            <OneLessonsInputField title={title} setTitle={setTitle} addTodo={addTask}/>
            <br/>
            <OneLessonsList/>
            <hr/>
                <OneLessonsSelect/>
            <hr/>
        </div>
    );
};

export default OneLessons;