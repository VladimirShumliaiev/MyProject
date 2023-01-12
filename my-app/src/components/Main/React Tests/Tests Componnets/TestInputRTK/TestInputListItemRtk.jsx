import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodoFetch, statusTodo} from "../../../../../Redux/Slices/testTodoSlice";
import style from './TestInputRtk.module.css'

const TestInputListItemRtk = ({id, completed, title}) => {
    const dispatch = useDispatch()

    const onChangeHandle = () => {
        dispatch(statusTodo(id))
    }

    const onClickHandle = () => {
        const deleteTodo = window.confirm('Delete todo?')

        if (deleteTodo === true) {
            dispatch(deleteTodoFetch(id))
        }

    }

    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChangeHandle}/>
            {title}
            <span className={style.delete} onClick={onClickHandle}>&times;</span>
        </div>
    );
};

export default TestInputListItemRtk;