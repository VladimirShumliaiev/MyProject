import React from 'react';

const TestInput = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodoTest()
    }

    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleSubmit(e)
        }
    }

    return (
        <div>
            <input value={props.title} onChange={e => props.setTitle(e.target.value)} onKeyDown={handleOnKeyDown} placeholder={'Text...'}/>
            <button onClick={props.addTodoTest}>Push</button>
        </div>
    );
};

export default TestInput;