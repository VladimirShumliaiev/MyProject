import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PostInput from "./PostInput";
import PostList from "./PostList";
import {addPost, fetchPost} from "../../../../../../Redux/Slices/postSlice";

const Post = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const {error, status} = useSelector(state => state.myPost)

    const addTask = () => {
        dispatch(addPost({title, body}))
        setTitle('')
        setBody('')
    }

    useEffect(() => {
        dispatch(fetchPost())
    }, [])

    return (
        <>
            <PostInput title={title} setTitle={setTitle} body={body} setBody={setBody} addPost={addTask}/>
            {status === 'pending' && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <div>
                <PostList/>
            </div>
        </>
    );
};

export default Post;