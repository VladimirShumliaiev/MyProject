import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk(
    'Todos/fetchTodo',
    async function(_,{rejectWithValue}){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')

            if(!response.ok){
                throw new Error('ERROR 1')
            }

            const data = response.json()
            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }

)

const setError = (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
}

const threeLessonsSlice = createSlice({
    name: 'Todos',
    initialState: {
        list: [],
        status: null,
        error: null,
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
    },
    extraReducers: {
        [fetchTodo.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchTodo.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.list = action.payload
        },
        [fetchTodo.rejected]: setError,
    }
})

export const {addTodo, deleteTodo, statusCompleted} = threeLessonsSlice.actions
export default threeLessonsSlice.reducer