import React from 'react';
import style from './Blog.module.css';
import Quiz from "./blogComponents/Quiz";

const Blog = () => {
    return (
        <div className={style.item}>
            <Quiz/>
        </div>
    );
};

export default Blog;