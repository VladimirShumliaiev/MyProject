import React from 'react';
import {useDispatch} from "react-redux";
import {fetchCanselTodo, removeTodoTest, toggleTodoTest} from "../../../../Redux/Slices/testTodoSlice";
import style from './TestItem.module.css'

const TestItem = ({id, title, completed}) => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(fetchCanselTodo(id))
    }

    const onChange = () => {
        dispatch(toggleTodoTest({id}))
    }
    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChange}/>
            {title}
            <span className={style.item} onClick={onClick}>&times;</span>
        </div>
    );
};

export default TestItem;