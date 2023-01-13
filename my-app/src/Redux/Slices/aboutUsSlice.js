import {createSlice} from "@reduxjs/toolkit";


const aboutUsSlice = createSlice({
    name: 'aboutUsSlice',
    initialState: {
        aboutTodo: []
    },

    reducers: {
        addAboutTodo(state, action) {
            state.aboutTodo.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            })
        },
        completedTodo(state, action) {
            const toggle = state.aboutTodo.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
        deleteTodo(state, action) {
            state.aboutTodo = state.aboutTodo.filter(e => e.id !== action.payload.id)
        },
    }
})

export const {addAboutTodo, completedTodo, deleteTodo} = aboutUsSlice.actions
export default aboutUsSlice.reducer