import React, {useState} from 'react';
import style from './HomeItem.module.css'
import HomePostList from "./HomePostList";
import {useDispatch} from "react-redux";
import {addPosts} from "../../../../../Redux/Slices/homeSlice";
import TextareaHomeField from "./TextareaHomeField";


const HomeItem = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTusk = () => {
        dispatch(addPosts({text}))
        setText('')
    }


    return (
        <div className={style.item}>
            <TextareaHomeField
                text={text}
                setText={setText}
                addTusk={addTusk}
            />
            <HomePostList/>
        </div>
    );
};

export default HomeItem;