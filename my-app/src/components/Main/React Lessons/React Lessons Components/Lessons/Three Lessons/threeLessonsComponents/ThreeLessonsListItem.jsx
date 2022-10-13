import React from 'react';
import style from './ThreeLessonsItem.module.css'
import {useDispatch} from "react-redux";
import {fetchCanselTodo, fetchStatusTodo, statusCompleted} from "../../../../../../../Redux/Slices/threeLessonsSlice";

const ThreeLessonsListItem = ({id, title, completed}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(fetchCanselTodo(id))
    }
    const onChange = () => {
        dispatch(fetchStatusTodo(id))
    }
    return (
        <li>
            <input type={"checkbox"} checked={completed} onChange={onChange}/>
            {title}
            <span onClick={onClick} className={style.item}>&times;</span>
        </li>
    );
};

export default ThreeLessonsListItem;