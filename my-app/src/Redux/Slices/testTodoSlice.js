import {createSlice} from "@reduxjs/toolkit";


const testTodoSlice = createSlice({
    name: 'test',
    initialState: {
        testTodos: []
    },
    reducers: {
        addTodo(state, action){
            state.testTodos.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            })
        },
        deleteTodo(state, action){
            state.testTodos = state.testTodos.filter(e => e.id !== action.payload.id)
        },
        completedTodo(state, action){
            const toggle = state.testTodos.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    }
})

export const {addTodo, deleteTodo, completedTodo} = testTodoSlice.actions
export default testTodoSlice.reducer