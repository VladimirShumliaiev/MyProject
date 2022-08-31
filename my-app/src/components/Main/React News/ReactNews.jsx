import React, {useState} from 'react';
import style from './ReactNews.module.css'
import TodoList from "./todoComponents/TodoList";
import InputField from "./todoComponents/InputField";
import {useDispatch} from "react-redux";
import {addTodos} from "../../../Redux/Slices/todoSlice";

const ReactNews = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTusk = () => {
        dispatch(addTodos({text}))
        setText('')
    }
    return (
        <div className={style.item}>
            <InputField
                text={text}
                setText={setText}
                addTusk={addTusk}/>
            <TodoList/>
        </div>
    );
};

export default ReactNews;