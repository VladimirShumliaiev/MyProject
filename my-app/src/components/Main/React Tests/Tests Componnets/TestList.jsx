import React from 'react';
import {useSelector} from "react-redux";
import TestItem from "./TestItem";

const TestList = () => {
    const todoSelector = useSelector(state => state.testTodo.todoList)
    return (
        <div>
            {
                todoSelector.map(e => <TestItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TestList;