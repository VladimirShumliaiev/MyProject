import React from 'react';
import {useSelector} from "react-redux";
import TodosListItem from "./TodosListItem";

const TodosList = () => {
    const selectorTodos = useSelector(state => state.todos.todos)
    return (
        <div>
            {
               selectorTodos.map((e) => <TodosListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TodosList;