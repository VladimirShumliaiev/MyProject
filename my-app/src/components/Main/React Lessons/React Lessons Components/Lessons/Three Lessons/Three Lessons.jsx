import React, {useState} from 'react';
import style from './ThreeLessons.module.css'
import ThreeLessonsInput from "./threeLessonsComponents/ThreeLessonsInput";
import {useDispatch} from "react-redux";
import {addTodo} from "../../../../../../Redux/Slices/threeLessonsSlice";
import ThreeLessonsList from "./threeLessonsComponents/ThreeLessonsList";

const ThreeLessons = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTodo({title}))
        setTitle('')
    }

    return (
        <div className={style.item}>
            <ThreeLessonsInput title={title} setTitle={setTitle} addTask={addTask}/>
            <ThreeLessonsList/>
        </div>
    );
};

export default ThreeLessons;