import React from 'react';
import style from './OneLessonsItem.module.css'
import {useDispatch} from "react-redux";
import {removeTodo, toggleCompleted} from "../../../../../../Redux/Slices/oneLessonsSlice";

const OneLessonsListItem = ({title, id, completed}) => {
    const dispatch = useDispatch()
    const onClickButton = () => {
        dispatch(removeTodo({id}))
    }
    const onChangeInput = () => {
        dispatch(toggleCompleted({id}))
    }
    return (
        <div>
            <input
                type={'checkbox'}
                checked={completed}
                onChange={onChangeInput}
            />
            {title}
            <span className={style.item} onClick={onClickButton}>&times;</span>
        </div>
    );
};

export default OneLessonsListItem;