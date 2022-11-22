import React from 'react';
import {useSelector} from "react-redux";
import TestInputListItemRtk from "./TestInputListItemRtk";

const TestInputListRtk = () => {
    const selector = useSelector(state => state.testTodo.testTodo)
    return (
        <div>
            {
                selector.map(e => <TestInputListItemRtk key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TestInputListRtk;