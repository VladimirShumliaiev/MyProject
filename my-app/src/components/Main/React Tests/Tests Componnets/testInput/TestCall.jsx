import React, {useState} from 'react';
import TestInput from "./TestInput";


const TestCall = () => {
    const [todos, setTodos] = useState([])

    const putTodo = (value) => {
        if (value) {
            setTodos([...todos, {id: new Date().toISOString(), text: value, done: false}])
        } else {
            alert('Text')
        }
    }


    return (
        <div>
            <TestInput putTodo={putTodo}/>
            <div>
                {
                    todos.map(e => {
                        return (
                            <div  key={e.id}>
                                {e.text}
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default TestCall;