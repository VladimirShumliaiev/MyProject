import React, {useEffect, useState} from 'react';
import myStyle from './Post.module.css'
import {useDispatch} from "react-redux";
import PostInput from "./PostInput";
import PostList from "./PostList";
import {addPost} from "../../../../../../Redux/Slices/postSlice";

const Post = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addPost({title, body}))
        setTitle('')
        setBody('')
    }

    return (
        <>
            <PostInput title={title} setTitle={setTitle} body={body} setBody={setBody} addPost={addTask}/>
            <div>
                <PostList/>
            </div>
        </>
    );
};

export default Post;