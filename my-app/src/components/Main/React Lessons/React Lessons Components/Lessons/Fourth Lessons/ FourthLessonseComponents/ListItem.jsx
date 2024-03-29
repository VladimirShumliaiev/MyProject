import React from 'react';
import {useDispatch} from "react-redux";
import {
    fetchDelete,
    fetchToggle,
} from "../../../../../../../Redux/Slices/fourthLessonsSlice";

const ListItem = ({id, title, completed}) => {
    const dispatch = useDispatch()

    const onClick = () => {
        const del = window.confirm(`DELETE TODO NUMBER - ${id} `)
        if (del === true) {
            dispatch(fetchDelete(id))
        } else {
            alert('CANSEL DELETE')
        }

    }
    const onChange = () => {
        dispatch(fetchToggle(id))
    }
    return (
        <li>
            <input type={"checkbox"} checked={completed} onChange={onChange}/>
            {title}
            <button onClick={onClick}>Delete</button>
            <hr/>
        </li>
    );
};

export default ListItem;