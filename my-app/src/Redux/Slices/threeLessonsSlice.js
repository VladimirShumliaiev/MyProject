import {createSlice} from "@reduxjs/toolkit";


const threeLessonsSlice = createSlice({
    name: 'three',
    initialState: {
        threeTodo: []
    },
    reducers: {
        addTodo(state, action){
            state.threeTodo.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false
            })
        },
        threeRemoveTodo(state, action){
            state.threeTodo = state.threeTodo.filter(e => e.id !== action.payload.id)
        },
        threeToggleTodo(state, action){
            const toggle = state.threeTodo.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    }
})

export const {addTodo, threeRemoveTodo, threeToggleTodo} = threeLessonsSlice.actions
export default threeLessonsSlice.reducer