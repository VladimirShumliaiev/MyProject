import React, {useState} from 'react';
import style from './TestInputRtk.module.css'
import TestInputRtk from "./TestInputRtk";
import TestInputListRtk from "./TestInputListRtk";
import {useDispatch} from "react-redux";
import {addTestTodo} from "../../../../../Redux/Slices/testTodoSlice";

const TestInputRtkCell = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTestTodo({title}))
        setTitle('')
    }
    return (
        <div>
            <hr className={style.line}/>
            <TestInputRtk title={title} setTitle={setTitle} addTodo={addTask}/>
            <TestInputListRtk/>
        </div>
    );
};

export default TestInputRtkCell;