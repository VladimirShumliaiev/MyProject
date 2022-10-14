import React from 'react';
import style from './ThreeLessonsItem.module.css'
import {useDispatch} from "react-redux";
import {
    fetchCanselTodo,
    fetchStatusCompleted
} from "../../../../../../../Redux/Slices/threeLessonsSlice";

const ThreeLessonsListItem = ({title,id,completed}) => {
    const dispatch = useDispatch()
    const onChange = () => {
        dispatch(fetchStatusCompleted(id))
    }
    const onClick = () => {
        dispatch(fetchCanselTodo(id))
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