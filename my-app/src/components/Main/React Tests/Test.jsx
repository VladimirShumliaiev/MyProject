import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodoTest, fetchTodoTest} from "../../../Redux/Slices/testTodoSlice";
import TestInput from "./Tests Componnets/TestInput";
import TestList from "./Tests Componnets/TestList";
import style from './Test.module.css'

const Test = () => {
    const [title, setTitle] = useState('')
    const {error, status} = useSelector(state => state.testTodo)
    const dispatch = useDispatch()

    const addTodo = () => {
        dispatch(addTodoTest({title}))
        setTitle('')
    }

    useEffect(() => {
        dispatch(fetchTodoTest({title}))
    },[dispatch])
    return (
        <div className={style.item}>
            <TestInput title={title} setTitle={setTitle} addTodoTest={addTodo}/>
            {status === 'rejected' && <h2>Loading...</h2>}
            {error && <h2>Error: {error}</h2>}
            <TestList/>
        </div>
    );
};

export default Test;