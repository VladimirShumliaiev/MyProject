import React from 'react';
import {useDispatch} from "react-redux";
import {fetchRemoveTwoTodo, fetchToggleTwoTodo} from "../../../../../../Redux/Slices/twoLessonsSlice";
import style from './ListItem.module.css'

const TwoLessonsListItem = ({id, title, completed}) => {
    const dispatch = useDispatch()

    const onClickHandler = () => {
        if (window.confirm(`Delete todo number - ${id}`) === true) {
            dispatch(fetchRemoveTwoTodo(id))
        } else {
            alert(`Cansel delete todo #${id}`)
        }

    }

    const onChangeHandler = () => {
        dispatch(fetchToggleTwoTodo(id))
    }
    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChangeHandler}/>
            {title}
            <span className={style.deleted} onClick={onClickHandler}>&times;</span>
        </div>
    );
};

export default TwoLessonsListItem;