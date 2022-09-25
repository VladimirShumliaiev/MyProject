import React, {useState} from 'react';
import style from './ReactNews.module.css'
import {useDispatch} from "react-redux";
import {addTodo} from "../../../Redux/Slices/todoSlice";
import InputField from "./todoComponents/InputField";
import TodoList from "./todoComponents/TodoList";

const ReactNews = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const addTask = () => {
        dispatch(addTodo({text}))
        setText('')
    }
    return (
        <div className={style.item}>
            <InputField text={text} setText={setText} addTodo={addTask}/>
            <TodoList/>
        </div>
    );
};

export default ReactNews;