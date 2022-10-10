import {createSlice} from "@reduxjs/toolkit";


const threeLessonsSlice = createSlice({
    name: 'Todos',
    initialState: {
        list: [],
    },
    reducers: {
        addTodo(state, action){
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            })
        },
        deleteTodo(state, action){
            state.list = state.list.filter(e => e.id !== action.payload.id)
        },
        statusCompleted(state, action){
            const toggle = state.list.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    }
})

export const {addTodo, deleteTodo, statusCompleted} = threeLessonsSlice.actions
export default threeLessonsSlice.reducer