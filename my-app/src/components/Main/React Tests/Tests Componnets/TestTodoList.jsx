import React from 'react';
import {useSelector} from "react-redux";
import TestTodoItem from "./TestTodoItem";

const TestTodoList = () => {
    const selector = useSelector(state => state.test.tests)

    return (
        <ol>
            {
                selector.map(e => <TestTodoItem key={e.id} {...e}/>)
            }
        </ol>
    );
};

export default TestTodoList;