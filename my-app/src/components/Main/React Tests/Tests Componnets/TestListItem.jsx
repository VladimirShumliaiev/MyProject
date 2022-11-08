import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodoTest, toggleTodoTest} from "../../../../Redux/Slices/testTodoSlice";
import style from './TestItem.module.css'

const TestListItem = ({id, title, completed}) => {
    const dispatch = useDispatch()
    const onChange = () => {
        dispatch(toggleTodoTest({id}))
    }
    const onClick = () => {
        dispatch((removeTodoTest({id})))
    }
    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChange}/>
            {title}
            <span className={style.item} onClick={onClick}>&times;</span>
        </div>
    );
};

export default TestListItem;