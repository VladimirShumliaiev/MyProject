import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'Todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodos(state, action){
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
        },
        removeTodo(state, action){
            state.todos = state.todos.filter(e => e.id !== action.payload.id)
        },
        toggleCompletedTodo(state, action){
            const toggle = state.todos.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    }
})

export const {addTodos, removeTodo, toggleCompletedTodo} = todoSlice.actions
export default todoSlice.reducer