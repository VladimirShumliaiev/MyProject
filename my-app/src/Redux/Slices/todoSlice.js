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

export const fetchCanselTodo = createAsyncThunk(
    'todoSlicer/fetchCanselTodo',
    async function (id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE'
            })
            if (!response.ok) {
                throw new Error('ERROR delete')
            }
            dispatch(removeTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchStatusCompleted = createAsyncThunk(
    'todoSlicer/fetchStatusCompleted',
    async function (id, {rejectWithValue, dispatch, getState}) {
        const todo = getState().todos.todos.find(e => e.id === id)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            })

            if(!response.ok){
                throw new Error('ERROR 3')
            }

            dispatch(toggleCompleted({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)

const setError = (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
}

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
        [fetchTodo.rejected]: setError,
        [fetchCanselTodo.rejected]: setError,
        [fetchStatusCompleted.rejected]: setError,
    }
})

export const {addTodo, toggleCompleted, removeTodo} = todoSlice.actions
export default todoSlice.reducer