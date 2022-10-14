import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk(
    'Todos/fetchTodo',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=30')

            if (!response.ok) {
                throw new Error('ERROR 1')
            }

            const data = response.json()

            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchCanselTodo = createAsyncThunk(
    'Todos/fetchCanselTodo',
    async function (id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE'
            })
            if (!response.ok) {
                throw new Error('ERROR 2')
            }
            dispatch(canselTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchStatusCompleted = createAsyncThunk(
    'Todos/fetchStatusCompleted',
    async function (id, {rejectWithValue, dispatch, getState}) {
        const todo = getState().threeLessons.todos.find(e => e.id === id)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            })

            if (!response.ok) {
                throw new Error('ERROR 3')
            }
            dispatch(statusCompleted({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addNewTodos = createAsyncThunk(
    'Todos/addNewTodos',
    async function (title, {rejectWithValue, dispatch}) {
        try {
            const todo = {
                userId: 1,
                title: title,
                completed: false,
            }
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(todo)
            })
            if (!response.ok) {
                throw new Error('ERROR 4')
            }
            const data = await response.json()
            dispatch(addTodo(data))

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
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        statusCompleted(state, action) {
            const toggle = state.todos.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
        canselTodo(state, action) {
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
        [addNewTodos.rejected]: setError,
    }
})

export const {addTodo, statusCompleted, canselTodo} = threeLessonsSlice.actions
export default threeLessonsSlice.reducer