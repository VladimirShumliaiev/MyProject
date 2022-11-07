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
        }
    }
})

export const {addTodo} = threeLessonsSlice.actions
export default threeLessonsSlice.reducer