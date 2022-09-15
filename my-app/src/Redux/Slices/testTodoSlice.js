import {createSlice} from "@reduxjs/toolkit";


const testTodoSlice = createSlice({
    name: 'TestTodo',
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
        removeTestTodo(state, action) {
            state.testTodo = state.testTodo.filter(e => e.id !== action.payload.id)
        },
        toggleTestTodo(state, action) {
            const toggleTest = state.testTodo.find(e => e.id === action.payload.id)
            toggleTest.completed = !toggleTest.completed
        },
    }
})

export const {addTestTodo, removeTestTodo, toggleTestTodo} = testTodoSlice.actions
export default testTodoSlice.reducer


