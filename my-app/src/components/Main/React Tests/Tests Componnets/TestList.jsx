import React from 'react';
import {useSelector} from "react-redux";
import TestItem from "./TestItem";

const TestList = () => {
    const selectorTest = useSelector(state => state.testTodo.test)
    return (
        <ol>
            {
                selectorTest.map(e => <TestItem key={e.id} {...e}/>)
            }
        </ol>
    );
};

export default TestList;