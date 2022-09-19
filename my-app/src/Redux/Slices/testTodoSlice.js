import {createSlice} from "@reduxjs/toolkit";


const testTodoSlice = createSlice({
    name: 'test',
    initialState: {
        testTodo: []
    },
    reducers: {
        addTestTodo(state, action) {
            state.testTodo.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
        },
        toggleCompleted(state, action) {
            const toggle = state.testTodo.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
        removeTestTodo(state, action) {
            state.testTodo = state.testTodo.filter(e => e.id !== action.payload.id)
        },

    }
})

export const {addTestTodo, toggleCompleted, removeTestTodo} = testTodoSlice.actions
export default testTodoSlice.reducer