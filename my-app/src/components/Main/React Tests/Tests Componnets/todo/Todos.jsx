import React, {useState} from 'react';
import TodosInput from "./TodosInput";
import TodosList from "./TodosList";
import {useDispatch} from "react-redux";
import {addTodos} from "../../../../../Redux/Slices/todosSlice";


const Todos = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTodos({title}))
        setTitle('')
    }

    return (
        <div>
            <TodosInput title={title} setTitle={setTitle} addTodos={addTask}/>
            <TodosList/>
        </div>
    );
};

export default Todos;