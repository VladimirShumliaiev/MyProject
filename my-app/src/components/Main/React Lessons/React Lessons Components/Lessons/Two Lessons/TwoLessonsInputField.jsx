import React from 'react';

const TwoLessonsInputField = (props) => {
    return (
        <div>
            <input value={props.text} onChange={e => props.setText(e.target.value)} placeholder={'addPosts'}/>
            <button onClick={props.addPost}>addPosts</button>
        </div>
    );
};

export default TwoLessonsInputField;