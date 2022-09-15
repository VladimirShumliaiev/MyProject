import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo, toggleCompleted} from "../../../../../../Redux/Slices/oneLessonsSlice";
import style from './OneLessonsItem.module.css'


const OneLessonsListItem = ({id, text, completed}) => {
    const dispatch = useDispatch()
    return (
        <li>
            <input type={'checkbox'} checked={completed} onChange={() => dispatch(toggleCompleted({id}))}/>
            {text}
            <span className={style.item} onClick={() => dispatch(removeTodo({id}))}>&times;</span>
        </li>
    );
};

export default OneLessonsListItem;