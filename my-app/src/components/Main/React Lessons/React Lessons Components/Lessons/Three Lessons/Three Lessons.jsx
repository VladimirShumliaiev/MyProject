import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNewTodo, addTodo, fetchTodo} from "../../../../../../Redux/Slices/threeLessonsSlice";
import ThreeLessonsInput from "./threeLessonsComponents/ThreeLessonsInput";
import ThreeLessonsList from "./threeLessonsComponents/ThreeLessonsList";
import style from './ThreeLessons.module.css'

const ThreeLessons = () => {
    const {status, error} = useSelector(state => state.threeLessons)
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const addTusk = () => {
        dispatch(addNewTodo(title))
        setTitle('')
    }

    useEffect(() => {
        dispatch(fetchTodo())
    },[dispatch])
    return (
        <div className={style.item}>
            <ThreeLessonsInput title={title} setTitle={setTitle} addTodo={addTusk}/>
            {status === 'Pending' && <h2>...LOADING</h2>}
            {error && <h2>Error:{error}</h2>}
            <ThreeLessonsList/>
        </div>
    );
};

export default ThreeLessons;