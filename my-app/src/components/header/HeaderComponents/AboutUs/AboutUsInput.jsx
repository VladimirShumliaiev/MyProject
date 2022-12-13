import React from 'react';

const AboutUsInput = ({addTodo, setTitle, title}) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()
            addTodo()
        }}>
            <input value={title} onChange={e => setTitle(e.target.value)}/>
            <button>>>>push>>></button>
        </form>
    );
};

export default AboutUsInput;