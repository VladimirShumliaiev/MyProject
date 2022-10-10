import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../../../../../../Redux/Slices/threeLessonsSlice";
import ThreeLessonsInput from "./threeLessonsComponents/ThreeLessonsInput";
import ThreeLessonsList from "./threeLessonsComponents/ThreeLessonsList";
import style from './ThreeLessons.module.css'

const ThreeLessons = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const addTask = () => {
        dispatch(addTodo({title}))
        setTitle('')
    }
    return (
        <div className={style.item}>
            <ThreeLessonsInput title={title} setTitle={setTitle} addTodo={addTask}/>
            <ThreeLessonsList/>
        </div>
    );
};

export default ThreeLessons;