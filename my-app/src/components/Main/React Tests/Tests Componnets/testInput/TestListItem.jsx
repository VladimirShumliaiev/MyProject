import React from 'react';
import {useDispatch} from "react-redux";
import {removeTestTodo, toggleTestTodo} from "../../../../../Redux/Slices/testTodoSlice";

const TestListItem = ({id, completed, title}) => {
    const dispatch = useDispatch()

    const onChangeInput = () => {
        dispatch(toggleTestTodo({id}))
    }

    const onClickButton = () => {
        dispatch(removeTestTodo({id}))
    }

    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChangeInput}/>
            {title}
            <span onClick={onClickButton}>&times;</span>
        </div>
    );
};

export default TestListItem;