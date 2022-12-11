import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodos} from "../../../../../Redux/Slices/todosSlice";
import TodosInput from "./TodosInput";
import TodosList from "./TodosList";
import style from './Todos.module.css';

const Todos = () => {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTodos({todo}))
        setTodo('')
    }
    return (
        <div>
            <TodosInput title={todo} setTitle={setTodo} addTodos={addTask}/>
            <br/>
            <div className={style.todoList}>
                <TodosList/>
            </div>

        </div>
    );
};

export default Todos;