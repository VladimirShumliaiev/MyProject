import React from 'react';
import {useDispatch} from "react-redux";
import {completedTodo, deleteTodo} from "../../../../../Redux/Slices/testTodoSlice";

const TestInputListItemRtk = ({id, completed, title}) => {
    const dispatch = useDispatch()

    const onChangeHandle = () => {
        dispatch(completedTodo({id}))
    }

    const onClickHandle = () => {
        dispatch(deleteTodo({id}))
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