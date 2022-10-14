import React, {useEffect, useState} from 'react';
import style from './ReactNews.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addTodo, fetchTodo} from "../../../Redux/Slices/todoSlice";
import InputField from "./todoComponents/InputField";
import TodoList from "./todoComponents/TodoList";

const ReactNews = () => {
    const dispatch = useDispatch()
    const {error, status} = useSelector(state => state.todos)
    const [title, setTitle] = useState('')
    const addTask = () => {
        dispatch(addTodo({title}))
        setTitle('')
    }

    useEffect(() => {
        dispatch(fetchTodo(title))
    },[dispatch])
    return (
        <div className={style.item}>
            <InputField title={title} setTitle={setTitle} addTodo={addTask}/>
            {status === 'pending' && <h2>LOADING...</h2>}
            {error && <h2>ERROR:{error}</h2>}
            <TodoList/>
        </div>
    );
};

export default ReactNews;