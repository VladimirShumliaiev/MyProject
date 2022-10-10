import React from 'react';
import {useDispatch} from "react-redux";
import style from './ThreeLessonsItem.module.css'
import {deleteTodo, statusCompleted} from "../../../../../../../Redux/Slices/threeLessonsSlice";

const ThreeLessonsListItem = ({id, completed, title}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(deleteTodo({id}))
    }
    const onChange = () => {
        dispatch(statusCompleted({id}))
    }
    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChange}/>
            {title}
            <span onClick={onClick} className={style.item}>&times;</span>
        </div>
    );
};

export default ThreeLessonsListItem;