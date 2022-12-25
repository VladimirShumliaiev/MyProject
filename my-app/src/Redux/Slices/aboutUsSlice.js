import {createSlice} from "@reduxjs/toolkit";


const aboutUsSlice = createSlice({
    name: 'aboutUs',
    initialState: {
        todo: [],
        status: null,
        error: null,
    },

    reducers: {
        addTodoAbout(state, action) {
            state.todo.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            })
        },
        deleteTodoAbout(state, action) {
            state.todo = state.todo.filter(e => e.id !== action.payload.id)
        },
        toggleTodoAbout(state, action) {
            const toggle = state.todo.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        }
    }
})

export const {addTodoAbout, deleteTodoAbout, toggleTodoAbout} = aboutUsSlice.actions
export default aboutUsSlice.reducer