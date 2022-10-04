import {createSlice} from "@reduxjs/toolkit";


const oneLessonsSlice = createSlice({
    name: 'Todo',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action){
            state.todos.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            })
        },
        removeTodo(state, action){
            state.todos = state.todos.filter(e => e.id !== action.payload.id)
        },
        toggleCompleted(state, action){
            const toggle = state.todos.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    }
})

export const {addTodo, removeTodo, toggleCompleted} = oneLessonsSlice.actions
export default oneLessonsSlice.reducer