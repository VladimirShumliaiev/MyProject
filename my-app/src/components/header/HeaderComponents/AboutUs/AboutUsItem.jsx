import React from 'react';
import {useDispatch} from "react-redux";
import {
    completedAboutFetch,
    deleteFetchTodo,
    removeTodoAbout,
    toggleTodoAbout
} from "../../../../Redux/Slices/aboutUsSlice";
import style from './AboutUs.module.css'

const AboutUsItem = ({completed, id, title}) => {
    const dispatch = useDispatch()

    const onChangeInput = () => {
        dispatch(completedAboutFetch(id))
    }
    const onClickButton = () => {
        const del = window.confirm('DELETE todo?')
        if (del === true) {
            dispatch(deleteFetchTodo(id))
        }

    }
    return (
        <div>
            <input className={style.inputCheckbox} type="checkbox" checked={completed} onChange={onChangeInput}/>
            {title}
            <button className={style.button} onClick={onClickButton}>&times;</button>
            <hr className={style.hr}/>
        </div>
    );
};

export default AboutUsItem;