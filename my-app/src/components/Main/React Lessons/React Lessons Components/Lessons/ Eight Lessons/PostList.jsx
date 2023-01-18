import React from 'react';
import {useSelector} from "react-redux";
import PostItem from "./PostItem";

const PostList = () => {
    const post = useSelector(state => state.myPost.post)
    return (
        <ol>
            {
                post.map(e => <PostItem key={e.id} {...e}/>)
            }
        </ol>
    );
};

export default PostList;