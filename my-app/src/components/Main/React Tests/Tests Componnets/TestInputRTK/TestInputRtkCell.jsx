import React, {useEffect, useState} from 'react';
import style from './TestInputRtk.module.css'
import TestInputRtk from "./TestInputRtk";
import TestInputListRtk from "./TestInputListRtk";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, fetchTestTodo, newTodo} from "../../../../../Redux/Slices/testTodoSlice";

const TestInputRtkCell = () => {
    const [title, setTitle] = useState('')
    const {error, status} = useSelector(state => state.testTodo)
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(newTodo(title))
        setTitle('')
    }

    useEffect(() => {
        dispatch(fetchTestTodo())
    },[])

    return (
        <div>
            <hr className={style.line}/>
            <TestInputRtk title={title} setTitle={setTitle} addTodo={addTask}/>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            <TestInputListRtk/>
            <hr className={style.line}/>
        </div>
    );
};

export default TestInputRtkCell;