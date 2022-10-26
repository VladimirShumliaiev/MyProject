import React, {useState} from 'react';
import './OneLessons.css'
import {useDispatch} from "react-redux";
import {addTodo} from "../../../../../../Redux/Slices/oneLessonsSlice";
import OneLessonsInputField from "./OneLessonsInputField";
import OneLessonsList from "./OneLessonsList";
import BackMenu from "../../Button-Back-Menu/BackMenu";
import OneLessonsSelect from "./OneLessonseSelect";

const OneLessons = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const addTask = () => {
        dispatch(addTodo({title}))
        setTitle('')
    }

    return (
        <div className={'itemOneLessons'}>
            <BackMenu/>
            <OneLessonsInputField title={title} setTitle={setTitle} addTodo={addTask}/>
            <OneLessonsList/>
            <hr className={'hr'}/>
            <OneLessonsSelect/>
        </div>
    );
};

export default OneLessons;