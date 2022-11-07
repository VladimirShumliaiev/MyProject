import React from 'react';


const TwoLessonsInputField = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addPost()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }

    }
    return (
        <div>
            <input value={props.title} onChange={e => props.setTitle(e.target.value)} onKeyDown={handleKeyDown} placeholder={'addPosts'}/>
            <button onClick={props.addPost}>addPosts</button>
        </div>
    );
};

export default TwoLessonsInputField;