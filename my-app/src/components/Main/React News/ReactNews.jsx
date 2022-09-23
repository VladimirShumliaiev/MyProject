import React, {useState} from 'react';
import style from './ReactNews.module.css'
import {useDispatch} from "react-redux";
import {addTodos} from "../../../Redux/Slices/todoSlice";
import InputField from "./todoComponents/InputField";
import TodoList from "./todoComponents/TodoList";

const ReactNews = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const addTusk = () => {
        dispatch(addTodos({text}))
        setText('')
    }

    return (
        <div className={style.item}>
            <InputField text={text} setText={setText} addTodos={addTusk}/>
            <TodoList/>
        </div>
    );
};

export default ReactNews;