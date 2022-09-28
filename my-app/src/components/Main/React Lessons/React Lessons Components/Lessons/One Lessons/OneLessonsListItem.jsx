import React from 'react';
import {useDispatch} from "react-redux";
import style from './OneLessonsItem.module.css'
import {removeTodo, toggleTodoCompleted} from "../../../../../../Redux/Slices/oneLessonsSlice";

const OneLessonsListItem = ({id, title, completed}) => {
    const dispatch = useDispatch()
    const onChangeInput = () => {
        dispatch(toggleTodoCompleted({id}))
    }
    const onClick = () => {
        dispatch(removeTodo({id}))
    }
    return (
        <div>
            <input
                type={"checkbox"}
                checked={completed}
                onChange={onChangeInput}
            />
            {title}
            <span className={style.item} onClick={onClick}>
                &times;
            </span>
        </div>
    );
};

export default OneLessonsListItem;