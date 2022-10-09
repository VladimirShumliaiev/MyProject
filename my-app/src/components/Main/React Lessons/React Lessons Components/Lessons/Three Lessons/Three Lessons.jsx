import React, {useEffect, useState} from 'react';
import style from './ThreeLessons.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, fetchTodo} from "../../../../../../Redux/Slices/threeLessonsSlice";
import ThreeLessonsInput from "./threeLessonsComponents/ThreeLessonsInput";
import ThreeLessonsList from "./threeLessonsComponents/ThreeLessonsList";

const ThreeLessons = () => {
    const dispatch = useDispatch()
    const {status, error} = useSelector(state => state.threeLessons)
    const [title, setTitle] = useState('')
    const addTask = () => {
        if (title.trim().length) {
            dispatch(addTodo({title}))
            setTitle('')
        }
    }

    useEffect(() => {
        dispatch(fetchTodo())
    },[dispatch])

    return (
        <div className={style.item}>
            <ThreeLessonsInput title={title} setTitle={setTitle} addTodo={addTask}/>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>error:{error}</h2> }
            <ThreeLessonsList/>
        </div>
    );
};

export default ThreeLessons;