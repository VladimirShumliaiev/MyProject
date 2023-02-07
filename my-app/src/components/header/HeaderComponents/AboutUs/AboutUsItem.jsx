import React from 'react';
import {useDispatch} from "react-redux";
import {completedTodo, deleteTodo} from "../../../../Redux/Slices/aboutUsSlice";
import myStyle from './AboutUs.module.css'


const AboutUsItem = ({title, completed, id}) => {
    const dispatch = useDispatch()
    const onChangeInput = () => {
        dispatch(completedTodo({id}))
    }
    const onClickButton = () => {
        const del = window.confirm(`delete todo N:${id}`)
        if (del) {
            dispatch(deleteTodo({id}))
        }

    }
    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChangeInput}/>
            {title}
            <button className={myStyle.button} onClick={onClickButton}>&times;</button>
        </div>
    );
};

export default AboutUsItem;
