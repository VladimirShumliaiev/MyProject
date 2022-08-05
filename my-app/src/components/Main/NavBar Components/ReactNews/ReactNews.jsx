import React, {useState} from 'react';
import style from './ReactNews.module.css'

const ReactNews = () => {

    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const addTodos = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false
                }
            ])
            setText('');
        }

    }
    const toggleToCompleted = (todoId) => {
        setTodos(
            todos.map(todo => {
                if (todo.id !== todoId) return todo;
                return {
                    ...todo,
                    completed: !todo.completed
                }

            })
        )
    }
    const removeTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    return (
        <div className={style.item}>
            <label>
                <input value={text} onChange={(e) => setText(e.target.value)}></input>
                <button onClick={addTodos}>Add Todos</button>
            </label>

            <ul>
                {
                    todos.map(todo => <li key={todo.id}>
                        <input type={'checkbox'}
                               checked={todo.completed}
                               onChange={() => toggleToCompleted(todo.id)}
                        />
                        <span>{todo.text}</span>
                        <span className={style.delete} onClick={() => removeTodo(todo.id)}> &times;</span>
                    </li>)
                }
            </ul>

        </div>
    );
};

export default ReactNews;