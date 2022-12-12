import React from 'react';
import {useDispatch} from "react-redux";
import {completedTodo, deleteTodo} from "../../../../../../Redux/Slices/oneLessonsSlice";
import style from './OneLessonsItem.module.css'

const OneLessonsListItem = ({completed, id, title}) => {
    const dispatch = useDispatch()

    const onChangeInput = () => {
        dispatch(completedTodo({id}))
    }

    const onClickButton = () => {
        const del = window.confirm('Delete todo? ')

        if (del === true) {
            dispatch(deleteTodo({id}))
        } else {
            alert('no delete')
        }
    }
    return (
        <div>
            <input className={style.input} type="checkbox" checked={completed} onChange={onChangeInput}/>
            {title}
            <button className={style.item} onClick={onClickButton}>x</button>
        </div>
    );
};

export default OneLessonsListItem;