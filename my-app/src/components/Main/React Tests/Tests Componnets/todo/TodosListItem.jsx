import React from 'react';
import {useDispatch} from "react-redux";
import {canselTodos, statusTodos} from "../../../../../Redux/Slices/todosSlice";

const TodosListItem = ({title, id, completed}) => {
    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(canselTodos({id}))
    }
    const onChangeHandler = () => {
        dispatch(statusTodos({id}))
    }
    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChangeHandler}/>
            {title}
            <span onClick={onClickHandler}>&times;</span>
        </div>
    );
};

export default TodosListItem;