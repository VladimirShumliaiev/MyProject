import React from 'react';
import {useSelector} from "react-redux";
import TestListItem from "./TestListItem";

const TestList = () => {
    const testList = useSelector(state => state.testTodo.testTodo)
    return (
        <div>
            {
                testList.map(e => <TestListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TestList;