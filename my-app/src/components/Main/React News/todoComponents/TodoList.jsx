import React from 'react';
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todoSelector = useSelector(state => state.todos.todos)
    return (
        <ol>
            {
                todoSelector.map(e => <TodoItem key={e.id} {...e}/>)
            }
        </ol>
    );
};

export default TodoList;