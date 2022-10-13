import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk(
    'Todos/fetchTodo',
    async function(_,{rejectWithValue}){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            if(!response.ok){
                throw new Error('ERROR')
            }
            const data = response.json()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const threeLessonsSlice = createSlice({
    name: 'Todos',
    initialState: {
        todoList: [],
        status: null,
        error: null,

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
    },
    extraReducers: {
        [fetchTodo.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchTodo.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.todoList = action.payload
        },
        [fetchTodo.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export const {addTodos, statusCompleted, canselTodo} = threeLessonsSlice.actions
export default threeLessonsSlice.reducer