import React, {useEffect, useState} from 'react';
import style from './ThreeLessons.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addNewTodos, fetchTodo} from "../../../../../../Redux/Slices/threeLessonsSlice";
import ThreeLessonsInput from "./threeLessonsComponents/ThreeLessonsInput";
import ThreeLessonsList from "./threeLessonsComponents/ThreeLessonsList";


const ThreeLessons = () => {
    const [title, setTitle] = useState('')
    const {status, error} = useSelector(state => state.threeLessons)
    const dispatch = useDispatch()
    const addTodoProps = () => {
        dispatch(addNewTodos(title))
        setTitle('')
    }

    useEffect(() => {
        dispatch(fetchTodo(title))
    },[dispatch])
    return (
        <div className={style.item}>
            <ThreeLessonsInput title={title} setTitle={setTitle} addTodo={addTodoProps}/>
            {status === 'pending' && <h2>...LOADING</h2>}
            {error && <h2>Error:{error}</h2>}
            <ThreeLessonsList/>
        </div>
    );
};

export default ThreeLessons;