import {createSlice} from "@reduxjs/toolkit";


const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodos(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                title: action.payload.todo,
                completed: false,
            })
        },
        statusTodos(state, action) {
            const toggle = state.todos.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
        canselTodos(state, action) {
            state.todos = state.todos.filter(e => e.id !== action.payload.id)
        },
    }
})

export const {addTodos, statusTodos, canselTodos} = todosSlice.actions
export default todosSlice.reducer
