import {createSlice} from "@reduxjs/toolkit";


const testTodoSlice = createSlice({
    name: 'test',
    initialState: {
        testTodo: []
    },
    reducers: {
        addTestTodo(state,action){
          state.testTodo.push({
              id: new Date().toISOString(),
              text: action.payload.text,
              completed: false,
          })
        },
        removeTestTodo(state,action){
            state.testTodo = state.testTodo.filter(e => e.id !== action.payload.id)
        },
        toggleCompleted(state,action){
            const toggle = state.testTodo.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    }
})

export const {addTestTodo, removeTestTodo, toggleCompleted} = testTodoSlice.actions
export default testTodoSlice.reducer
