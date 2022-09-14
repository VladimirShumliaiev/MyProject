import {createSlice} from "@reduxjs/toolkit";


const testTodoSlice = createSlice({
    name: 'Test',
    initialState: {
        test: []
    },
    reducers: {
        addTestTodo(state,action){
            state.test.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
        },
        removeTestTodo(state,action){
            state.test = state.test.filter(e => e.id !== action.payload.id)
        },
        toggleTestTodo(state,action){
            const toggle = state.test.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    }
})

export const {addTestTodo,removeTestTodo,toggleTestTodo} = testTodoSlice.actions
export default testTodoSlice.reducer