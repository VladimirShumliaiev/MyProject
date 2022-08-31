import React from 'react';
import {useSelector} from "react-redux";
import ReactTestListItem from "./ReactTestListItem";

const ReactTestList = () => {
    const test = useSelector(state => state.test.test);

    return (
        <div>
            {
                test.map((e) => <ReactTestListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default ReactTestList;