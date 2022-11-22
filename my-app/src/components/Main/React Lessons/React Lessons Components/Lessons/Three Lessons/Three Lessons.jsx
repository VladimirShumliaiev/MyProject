import React, {useEffect, useState} from 'react';
import style from './ThreeLessons.module.css'
import ThreeLessonsInput from "./threeLessonsComponents/ThreeLessonsInput";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, fetchThreeLessons} from "../../../../../../Redux/Slices/threeLessonsSlice";
import ThreeLessonsList from "./threeLessonsComponents/ThreeLessonsList";

const ThreeLessons = () => {
    const [title, setTitle] = useState('')
    const {error, status} = useSelector(state => state.threeLessons)
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTodo({title}))
        setTitle('')
    }

    useEffect(() => {
        dispatch(fetchThreeLessons(title))
    }, [dispatch])

    return (
        <div className={style.item}>
            <ThreeLessonsInput title={title} setTitle={setTitle} addTask={addTask}/>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            <ThreeLessonsList/>
        </div>
    );
};

export default ThreeLessons;