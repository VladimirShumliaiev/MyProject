import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTestTodo} from "../../../../../Redux/Slices/testTodoSlice";

const TestInput = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTestTodo({title}))
        setTitle('')
    }

    const handlerButton = (e) => {
        e.preventDefault()
        addTask()
    }

    const onKeyDawn = (e) => {
        if (e.key === 'Enter') {
            handlerButton(e)
        }
    }

    return (
        <div>
            <input value={title} onKeyDown={onKeyDawn} onChange={e => setTitle(e.target.value)} placeholder={'...Text'}/>
            <button onClick={addTask}>Button</button>
        </div>
    );
};

export default TestInput;