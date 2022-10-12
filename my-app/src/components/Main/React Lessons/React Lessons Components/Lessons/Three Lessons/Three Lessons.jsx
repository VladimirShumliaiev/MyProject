import React, {useState} from 'react';
import style from './ThreeLessons.module.css'
import ThreeLessonsInput from "./threeLessonsComponents/ThreeLessonsInput";
import ThreeLessonsList from "./threeLessonsComponents/ThreeLessonsList";
import {useDispatch} from "react-redux";
import {addTodos} from "../../../../../../Redux/Slices/threeLessonsSlice";

const ThreeLessons = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const addTask = () => {
        dispatch(addTodos({title}))
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