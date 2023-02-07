import {createSlice} from "@reduxjs/toolkit";


const aboutUsSlice = createSlice({
    name: 'aboutUs',
    initialState: {
        todo: [],
    },

    reducers: {
        addTodo(state, action) {
            state.todo.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            })
        },
        deleteTodo(state, action) {
            state.todo = state.todo.filter(e => e.id !== action.payload.id)
        },
        completedTodo(state, action) {
            const toggle = state.todo.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        }
    }
})

export const {addTodo, deleteTodo, completedTodo} = aboutUsSlice.actions
export default aboutUsSlice.reducer