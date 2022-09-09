import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo, toggleCompleted,} from "../../../../Redux/Slices/testSlice";


const TestTodoItem = ({text,id,completed}) => {
    const dispatch = useDispatch()
    return (
        <li>
            <input
                type={"checkbox"}
                checked={completed}
                onChange={() => dispatch(toggleCompleted({id}))}
            />
            {text}
            <span onClick={() => dispatch(removeTodo({id}))}>
                &times;
            </span>
        </li>
    );
};

export default TestTodoItem;