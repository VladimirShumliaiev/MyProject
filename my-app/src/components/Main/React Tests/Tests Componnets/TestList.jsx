import React from 'react';
import {useSelector} from "react-redux";
import TestListItem from "./TestListItem";

const TestList = () => {
    const selector = useSelector(state => state.testTodo.test)
    return (
        <div>
            {
                selector.map(e => <TestListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TestList;