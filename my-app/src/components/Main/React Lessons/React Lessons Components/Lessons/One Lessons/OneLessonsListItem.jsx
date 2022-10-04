import React from 'react';
import {useDispatch} from "react-redux";
import style from './OneLessonsItem.module.css'
import {removeTodo, toggleCompleted} from "../../../../../../Redux/Slices/oneLessonsSlice";

const OneLessonsListItem = ({id, completed, title}) => {
    const dispatch = useDispatch()
    const onClickSpan = () => {
        dispatch(removeTodo({id}))
    }
    const onChangeInput = () => {
        dispatch(toggleCompleted({id}))
    }
    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChangeInput}/>
            {title}
            <span className={style.item} onClick={onClickSpan}>&times;</span>
        </div>
    );
};

export default OneLessonsListItem;