import React from 'react';
import {useSelector} from "react-redux";
import TestInputListItemRtk from "./TestInputListItemRtk";

const TestInputListRtk = () => {
    const todos = useSelector(state => state.testTodo.testTodos)
    return (
        <div>
            {
                todos.map(e => <TestInputListItemRtk key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TestInputListRtk;