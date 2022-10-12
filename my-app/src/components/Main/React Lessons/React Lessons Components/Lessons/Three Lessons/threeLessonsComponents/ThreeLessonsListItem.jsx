import React from 'react';
import style from './ThreeLessonsItem.module.css'
import {useDispatch} from "react-redux";
import {canselTodo, statusCompleted} from "../../../../../../../Redux/Slices/threeLessonsSlice";

const ThreeLessonsListItem = ({id, title, completed}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(canselTodo({id}))
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