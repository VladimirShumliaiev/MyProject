import React, {useState} from 'react';

const TestInput = (props) => {
    const [title, setTitle] = useState('')

    return (
        <form onSubmit={e => {
            e.preventDefault()
            props.putTodo(title)
        }}>
            <input value={title} onChange={e => setTitle(e.target.value)}/>
        </form>
    );
};

export default TestInput;