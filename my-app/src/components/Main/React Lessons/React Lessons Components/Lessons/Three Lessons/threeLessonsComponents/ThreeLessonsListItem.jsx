import React from 'react';
import {useDispatch} from "react-redux";
import style from './ThreeLessonsItem.module.css'
import {
    fetchCanselTodo,
    fetchStatusCompleted,
} from "../../../../../../../Redux/Slices/threeLessonsSlice";

const ThreeLessonsListItem = ({id, completed, title}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(fetchCanselTodo(id))
    }
    const onChange = () => {
        dispatch(fetchStatusCompleted(id))
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