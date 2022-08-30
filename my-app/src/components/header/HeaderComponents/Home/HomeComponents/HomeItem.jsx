import React, {useState} from 'react';
import style from './HomeItem.module.css'
import HomePostList from "./HomePostList";
import TextereaHomeFild from "./TextereaHomeFild";
import {useDispatch} from "react-redux";
import {addPosts} from "../../../../../Redux/Slices/homeSlice";


const HomeItem = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTusk = () => {
        dispatch(addPosts({text}))
        setText('')
    }



    return (
        <div className={style.item}>
            <TextereaHomeFild
                text={text}
                setText={setText}
                addTusk={addTusk}
            />
            <HomePostList />
        </div>
    );
};

export default HomeItem;