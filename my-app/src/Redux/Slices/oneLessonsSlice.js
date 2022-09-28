import {createSlice} from "@reduxjs/toolkit";


const oneLessonsSlice = createSlice({
    name: 'OneLessonsTodo',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            })
        },
        toggleTodoCompleted(state, action) {
            const toggle = state.todos.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(e => e.id !== action.payload.id)
        },
    }
})

export const {addTodo, toggleTodoCompleted, removeTodo} = oneLessonsSlice.actions
export default oneLessonsSlice.reducer