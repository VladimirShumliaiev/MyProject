import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk(
    'todoSlicer/fetchTodo',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=35')
            if (!response.ok) {
                throw new Error('ERROR')
            }

            return response.json()

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const todoSlice = createSlice({
    name: 'todoSlicer',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
        },
        toggleCompleted(state, action) {
            const toggle = state.todos.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(e => e.id !== action.payload.id)
        },
    },
    extraReducers: {
        [fetchTodo.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchTodo.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.todos = action.payload
        },
        [fetchTodo.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export const {addTodo, toggleCompleted, removeTodo} = todoSlice.actions
export default todoSlice.reducer