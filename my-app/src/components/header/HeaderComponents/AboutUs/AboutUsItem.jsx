import React from 'react';
import style from './AboutUs.module.css'
import {useDispatch} from "react-redux";
import {completedTodo, deleteTodo} from "../../../../Redux/Slices/aboutUsSlice";

const AboutUsItem = ({id, completed, title}) => {
    const dispatch = useDispatch()

    const oneChangeInput = () => {
        dispatch(completedTodo({id}))
    }
    const oneClickDeleteTodo = () => {
        const del = window.confirm('delete todo?')

        if (del === true) {
            dispatch(deleteTodo({id}))
        }
    }
    return (
        <li>
            <input className={style.inputCheckbox} type="checkbox" checked={completed} onChange={oneChangeInput}/>
            <span className={style.title}>
                {title}
            </span>
            <button onClick={oneClickDeleteTodo} className={style.button}>X</button>
            <hr className={style.hr}/>
        </li>
    );
};

export default AboutUsItem;