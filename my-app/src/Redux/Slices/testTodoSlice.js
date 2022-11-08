import {createSlice} from "@reduxjs/toolkit";


const testTodoSlice = createSlice({
    name: 'Test',
    initialState: {
        test: []
    },
    reducers: {
        addTodoTest(state, action) {
            state.test.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            })
        },
        toggleTodoTest(state, action){
            const toggle = state.test.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
        removeTodoTest(state, action){
            state.test = state.test.filter(e => e.id !== action.payload.id)
        },
    }
})

export const {addTodoTest, toggleTodoTest, removeTodoTest} = testTodoSlice.actions
export default testTodoSlice.reducer