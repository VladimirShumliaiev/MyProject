import React from 'react';
import {useSelector} from "react-redux";
import TestTodoItem from "./TestTodoItem";

const TestTodoList = () => {
    const selector = useSelector(state => state.tests.tests)

    return (
        <div>
            {
                selector.map(e => <TestTodoItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TestTodoList;