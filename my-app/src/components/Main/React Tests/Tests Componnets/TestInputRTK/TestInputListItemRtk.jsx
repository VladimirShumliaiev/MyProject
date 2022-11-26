import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodoFetch, statusTodo} from "../../../../../Redux/Slices/testTodoSlice";

const TestInputListItemRtk = ({id, completed, title}) => {
    const dispatch = useDispatch()

    const onChangeHandle = () => {
        dispatch(statusTodo(id))
    }

    const onClickHandle = () => {
        dispatch(deleteTodoFetch(id))
    }

    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChangeHandle}/>
            {title}
            <span onClick={onClickHandle}>&times;</span>
        </div>
    );
};

export default TestInputListItemRtk;