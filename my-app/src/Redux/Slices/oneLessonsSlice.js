import {createSlice} from "@reduxjs/toolkit";


const oneLessonsSlice = createSlice({
    name: 'oneLessons',
    initialState: {
        todo: [
            {
                id: 1,
                title: `oneTodo`,
                completed: false,
            },
            {
                id: 2,
                title: `twoTodo`,
                completed: true,
            },
            {
                id: 3,
                title: `threeTodo`,
                completed: false,
            }
        ]

    },

    reducers: {
        addTodo(state, action) {
            state.todo.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            })
        },
        deleteTodo(state, action) {
            state.todo = state.todo.filter(e => e.id !== action.payload.id)
        },
        completedTodo(state, action) {
            const toggle = state.todo.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    }
})

export const {addTodo, deleteTodo, completedTodo} = oneLessonsSlice.actions
export default oneLessonsSlice.reducer