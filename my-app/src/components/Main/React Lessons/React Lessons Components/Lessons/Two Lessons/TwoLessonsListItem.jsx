import React from 'react';
import {useDispatch} from "react-redux";
import {removePost} from "../../../../../../Redux/Slices/twoLessonsSlice";
import style from './ListItem.module.css'

const TwoLessonsListItem = ({ava, text, id}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(removePost({id}))
    }
    return (
        <li>
            <img src={ava} alt=""/>
            {text}
            <span onClick={onClick} className={style.deleted}>&times;</span>
        </li>
    );
};

export default TwoLessonsListItem;