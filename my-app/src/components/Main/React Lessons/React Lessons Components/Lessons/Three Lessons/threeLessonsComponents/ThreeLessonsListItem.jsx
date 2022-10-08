import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodo, toggleStatus} from "../../../../../../../Redux/Slices/threeLessonsSlice";
import style from './ThreeLessonsItem.module.css'

const ThreeLessonsListItem = ({id, title, completed}) => {
    const dispatch = useDispatch()
    const onChange = () => {
        dispatch(toggleStatus(id))
    }
    const onClick = () => {
        dispatch(deleteTodo(id))
    }
    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChange}/>
            {title}
            <span className={style.item} onClick={onClick}>&times;</span>
        </div>
    );
};

export default ThreeLessonsListItem;