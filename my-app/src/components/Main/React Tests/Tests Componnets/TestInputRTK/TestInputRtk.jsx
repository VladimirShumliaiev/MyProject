import React from 'react';

const TestInputRtk = ({addTodo, setTitle, title}) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()
            addTodo()
        }}>
            <div>
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder={'Text...'}/>
                <button>Push</button>
            </div>
        </form>

    );
};

export default TestInputRtk;