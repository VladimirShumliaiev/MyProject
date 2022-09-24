import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
        },
        toggleCompleted(state, action) {
            const toggle = state.todos.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(e => e.id !== action.payload.id)
        },
    }
})

export const {addTodo, toggleCompleted, removeTodo} = todoSlice.actions
export default todoSlice.reducer