import {createSlice} from "@reduxjs/toolkit";


const testTodoSlice = createSlice({
    name: 'Test',
    initialState: {
        testTodo: []
    },
    reducers: {
        addTestTodo(state,action){
            state.testTodo.push({
                id: new Date().toISOString(),
                completed: false,
                text: action.payload.text,
            })
        },
        removeTestTodo(state,action){
            state.testTodo = state.testTodo.filter(e => e.id !== action.payload.id)
        },
        toggleCompletedTestTodo(state,action){
            const toggle = state.testTodo.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    }
})

export const {addTestTodo,removeTestTodo,toggleCompletedTestTodo} = testTodoSlice.actions
export default testTodoSlice.reducer