import React from 'react';
import {useDispatch} from "react-redux";
import {
    completeAboutTodo,
    deleteAboutTodo,
} from "../../../../Redux/Slices/aboutUsSlice";
import style from './AboutUs.module.css'

const AboutUsItem = ({title, completed, id}) => {
    const dispatch = useDispatch()

    const onChangeInput = () => {
        dispatch(completeAboutTodo(id))
    }
    const onClickButton = () => {
        dispatch(deleteAboutTodo(id))
    }
    return (
        <li>
            <input className={style.inputCheckbox} type={"checkbox"} checked={completed} onChange={onChangeInput}/>
            {title}
            <button className={style.button} onClick={onClickButton}>&times;</button>
            <hr className={style.hr}/>
        </li>
    );
};

export default AboutUsItem;