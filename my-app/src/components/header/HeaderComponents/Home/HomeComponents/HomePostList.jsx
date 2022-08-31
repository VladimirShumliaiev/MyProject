import React from 'react';
import HomePostItem from "./HomePostItem";
import {useSelector} from "react-redux";

const HomePostList = () => {
    const addPost = useSelector(state => state.posts.posts);

    return (
        <span>
            {
                addPost.map(e => <HomePostItem key={e.id}  {...e}/>)
            }
        </span>
    );
};

export default HomePostList;