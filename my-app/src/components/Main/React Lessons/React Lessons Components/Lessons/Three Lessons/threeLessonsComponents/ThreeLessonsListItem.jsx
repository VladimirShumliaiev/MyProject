import React from 'react';
import {useDispatch} from "react-redux";
import {canselTodoFetch, completedFetchTodo, removeTodo} from "../../../../../../../Redux/Slices/threeLessonsSlice";
import style from './ThreeLessonsItem.module.css'

const ThreeLessonsListItem = ({title, id, completed}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(canselTodoFetch(id))
    }

    const onChange = () => {
        dispatch(completedFetchTodo(id))
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