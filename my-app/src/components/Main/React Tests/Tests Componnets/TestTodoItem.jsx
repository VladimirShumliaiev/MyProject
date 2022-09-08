import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodoTest, toggleTodoTest} from "../../../../Redux/Slices/testSlice";



const TestTodoItem = ({id,text,completed}) => {
    const dispatch = useDispatch();
    return (
        <li>
            <input
                type={`checkbox`}
                checked={completed}
                onChange={() => dispatch(toggleTodoTest({id}))}
            />
            {text}
            <span  onClick={() => dispatch(removeTodoTest({id}))}>
                &times;
            </span>

        </li>
    );
};

export default TestTodoItem;