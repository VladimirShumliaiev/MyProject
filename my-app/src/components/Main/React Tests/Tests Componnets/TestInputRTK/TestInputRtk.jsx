import React from 'react';


const TestInputRtk = ({title, addTodo, setTitle}) => {

    // const handelSubmit = (e) => {
    //     e.preventDefault()
    //     addTodo()
    // }
    //
    // const onKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         handelSubmit(e)
    //         setTitle('')
    //     }
    // }

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                addTodo()
                setTitle('')
            }}>
                <input value={title} onChange={e => setTitle(e.target.value)}/>
                <button>Click</button>
            </form>
        </div>
    );
};

export default TestInputRtk;