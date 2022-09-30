import React from 'react';

const TwoLessonsInputField = (props) => {
    return (
        <div>
            <input value={props.title} onChange={e => props.setTitle(e.target.value)} placeholder={'addPosts'}/>
            <button onClick={props.addPost}>addPosts</button>
        </div>
    );
};

export default TwoLessonsInputField;