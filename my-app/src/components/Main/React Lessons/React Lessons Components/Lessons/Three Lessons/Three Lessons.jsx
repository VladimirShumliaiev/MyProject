import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo,fetchTodo} from "../../../../../../Redux/Slices/threeLessonsSlice";
import ThreeLessonsInput from "./threeLessonsComponents/ThreeLessonsInput";
import ThreeLessonsList from "./threeLessonsComponents/ThreeLessonsList";
import style from './ThreeLessons.module.css'

const ThreeLessons = () => {
    const [title, setTitle] = useState('')
    const {status, error} = useSelector(state => state.threeLessons)
    const dispatch = useDispatch()
    const addTask = () => {
        dispatch(addTodo({title}))
        setTitle('')
    }

    useEffect(() => {
        dispatch(fetchTodo())
    },[dispatch])
    return (
        <div className={style.item}>
            <ThreeLessonsInput title={title} setTitle={setTitle} addTodo={addTask}/>
            {status === 'pending' && <h2>Pending...</h2>}
            {error && <h2>Error:{error}</h2>}
            <ThreeLessonsList/>
        </div>
    );
};

export default ThreeLessons;