import React from 'react';
import {useSelector} from "react-redux";
import ListItem from "./ListItem";

const List = () => {
    const selector = useSelector(state => state.fourthTodo.todos)
    return (
        <ol>
            {
                selector.map(e => <ListItem key={e.id} {...e}/>)
            }
        </ol>
    );
};

export default List;