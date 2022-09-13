import React from 'react';
import {useSelector} from "react-redux";
import TestItem from "./TestItem";

const TestList = () => {

    const selector = useSelector(state => state.test.testTodo)

    return (
        <ol>
            {
                selector.map(e => <TestItem key={e.id} {...e}/>)
            }
        </ol>
    );
};

export default TestList;