import {createSlice} from "@reduxjs/toolkit";

export const threeLessonsSlice = createSlice({
    name: 'Todos',
    initialState: {
        todoList: []
    },
    reducers: {
        addTodos(state, action){
            state.todoList.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            })
        },
        statusCompleted(state, action){
           const toggleCompleted = state.todoList.find(e => e.id === action.payload.id)
            toggleCompleted.completed = !toggleCompleted.completed
        },
        canselTodo(state, action){
            state.todoList = state.todoList.filter(e => e.id !== action.payload.id)
        },
    }
})

export const {addTodos, statusCompleted, canselTodo} = threeLessonsSlice.actions
export default threeLessonsSlice.reducer