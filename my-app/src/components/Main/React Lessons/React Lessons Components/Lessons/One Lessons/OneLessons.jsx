import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../../../../../../Redux/Slices/oneLessonsSlice";
import OneLessonsInputField from "./OneLessonsInputField";
import OneLessonsList from "./OneLessonsList";
import './OneLessons.css'

const OneLessons = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const addTodoProps = () => {
        dispatch(addTodo({title}))
        setTitle('')
    }
    return (
        <div className='itemOneLessons'>
            <OneLessonsInputField title={title} setTitle={setTitle} addTodo={addTodoProps}/>
            <OneLessonsList/>
        </div>
    );
};

export default OneLessons;