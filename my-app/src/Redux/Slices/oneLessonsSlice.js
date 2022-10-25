import {createSlice} from "@reduxjs/toolkit";


const oneLessonsSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
            {
                id: 1,
                title: 'one',
                completed: false

            },
            {
                id: 2,
                title: 'two',
                completed: false

            },
            {
                id: 3,
                title: 'three',
                completed: false

            },
        ]
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