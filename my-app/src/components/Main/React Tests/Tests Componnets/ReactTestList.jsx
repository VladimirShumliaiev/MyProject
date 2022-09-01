import React from 'react';
import {useSelector} from "react-redux";
import ReactTestListItem from "./ReactTestListItem";

const ReactTestList = () => {

    const selector = useSelector(state => state.test.test);

    return (
        <ol>
            {
                selector.map(e => <ReactTestListItem key={e.id} {...e} />)
            }
        </ol>
    );
};

export default ReactTestList;


