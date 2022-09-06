import React from 'react';
import {useSelector} from "react-redux";
import TestListItem from "./TestListItem";

const TestList = () => {
    const selector = useSelector(state => state.test.test)

    return (
        <ol>
            {
                selector.map(e => <TestListItem key={e.id} {...e}/>)
            }
        </ol>
    );
};

export default TestList;