import React from 'react';


const HomePostItem = ({text, like, ava}) => {
    return (
        <div>
            <img src={ava} alt=""/>
            <span> {text} </span>
            <div>like: {like} counts</div>
        </div>
    );
};

export default HomePostItem;