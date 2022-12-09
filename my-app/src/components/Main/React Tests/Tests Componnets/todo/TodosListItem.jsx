import React from 'react';
import {useDispatch} from "react-redux";
import {canselTodos, statusTodos} from "../../../../../Redux/Slices/todosSlice";

const TodosListItem = ({id, completed, title}) => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(canselTodos({id}))
    }
    const onChange = () => {
        dispatch(statusTodos({id}))
    }
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={onChange}/>
            {title}
            <button onClick={onClick}>x</button>
        </div>
    );
};

export default TodosListItem;