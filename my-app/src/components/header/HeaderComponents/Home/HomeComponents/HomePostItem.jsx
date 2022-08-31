import React from 'react';


const HomePostItem = ({id, text, like, ava}) => {
    return (
        <div key={id}>
            <img src={ava} alt=""/>
            <span> {text} </span>
            <div>like: {like} counts</div>
        </div>
    );
};

export default HomePostItem;