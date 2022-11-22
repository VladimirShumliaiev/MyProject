import React from 'react';
import {useDispatch} from "react-redux";
import {removeTestTodo, toggleTestTodo} from "../../../../../Redux/Slices/testTodoSlice";

const TestInputListItemRtk = ({id, title, completed}) => {
    const dispatch = useDispatch()

    const onChange  = () => {
        dispatch(toggleTestTodo({id}))
    }
    const onClick = () => {
        dispatch(removeTestTodo({id}))
    }
    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChange} />
            {title}
            <span onClick={onClick}>&times;</span>
        </div>
    );
};

export default TestInputListItemRtk;