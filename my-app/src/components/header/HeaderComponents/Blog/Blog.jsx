import React from 'react';
import style from './Blog.module.css';
import Questions from "./blogComponents/Questions";

const Blog = () => {
    return (
        <div className={style.item}>
            <Questions/>
        </div>
    );
};

export default Blog;