import React from 'react';
import {useSelector} from "react-redux";
import ReactTestListItem from "./ReactTestListItem";

const ReactTestList = () => {

    const smsList = useSelector(state => state.sms.sms)

    return (
        <ol>
            {
                smsList.map(e => <ReactTestListItem key={e.id} {...e}/>)
            }
        </ol>
    );
};

export default ReactTestList;



