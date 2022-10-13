import React, {useEffect, useState} from 'react';
import style from './ThreeLessons.module.css'
import ThreeLessonsInput from "./threeLessonsComponents/ThreeLessonsInput";
import ThreeLessonsList from "./threeLessonsComponents/ThreeLessonsList";
import {useDispatch, useSelector} from "react-redux";
import {addTodos, fetchTodo} from "../../../../../../Redux/Slices/threeLessonsSlice";

const ThreeLessons = () => {
    const [title, setTitle] = useState('')
    const {status, error} = useSelector(state => state.threeLessons)
    const dispatch = useDispatch()
    const addTask = () => {
        dispatch(addTodos({title}))
        setTitle('')
    }

    useEffect(() => {
        dispatch(fetchTodo())
    },[])
    return (
        <div className={style.item}>
            <ThreeLessonsInput title={title} setTitle={setTitle} addTodo={addTask}/>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>Error:{error}</h2>}
            <ThreeLessonsList/>
        </div>
    );
};

export default ThreeLessons;