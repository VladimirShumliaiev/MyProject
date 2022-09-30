import React from 'react';
import style from './OneLessonsItem.module.css'
import {useDispatch} from "react-redux";
import {removeTodo, toggleCompleted} from "../../../../../../Redux/Slices/oneLessonsSlice";

const OneLessonsListItem = ({title, id, completed}) => {
    const dispatch = useDispatch()
    const onChangeInput = () => {
        dispatch(toggleCompleted({id}))
    }
    const onClickSpan = () => {
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
            <span onClick={onClickSpan} className={style.item}>&times;</span>
        </div>
    );
};

export default OneLessonsListItem;