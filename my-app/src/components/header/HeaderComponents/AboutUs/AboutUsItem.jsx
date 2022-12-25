import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodoAbout, toggleTodoAbout} from "../../../../Redux/Slices/aboutUsSlice";
import style from './AboutUs.module.css'

const AboutUsItem = ({title, completed, id}) => {
    const dispatch = useDispatch()

   const onChangeInput = () => {
        dispatch(toggleTodoAbout({id}))
   }
    const onClickSpan = () => {
        dispatch(deleteTodoAbout({id}))
    }
    return (
        <div>
            <input className={style.inputCheckbox} type={"checkbox"} checked={completed} onChange={onChangeInput}/>
            {title}
            <button className={style.button} onClick={onClickSpan}>&times;</button>
            <hr className={style.hr}/>
        </div>
    );
};

export default AboutUsItem;