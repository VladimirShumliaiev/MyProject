import React, {useEffect, useState} from 'react';
import style from './ThreeLessons.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addNewTodo, addTodo, fetchTodos} from "../../../../../../Redux/Slices/threeLessonsSlice";
import ThreeLessonsInput from "./threeLessonsComponents/ThreeLessonsInput";
import ThreeLessonsList from "./threeLessonsComponents/ThreeLessonsList";

const ThreeLessons = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const {status, error} = useSelector(state => state.threeLessons)
    const addTask = () => {
        if(title.trim().length){}
        dispatch(addNewTodo(title))
        setTitle('')
    }
    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])
    return (
        <div className={style.item}>
            <ThreeLessonsInput title={title} setTitle={setTitle} addTodo={addTask}/>

            {status === 'LOADING' && <h2>LOADING</h2>}
            {error && <h2>ERROR: {error}</h2>}

            <ThreeLessonsList/>
        </div>
    );
};

export default ThreeLessons;