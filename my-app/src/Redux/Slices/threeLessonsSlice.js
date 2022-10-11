import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk(
    'Todos/fetchTodo',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=30')

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
                throw new Error('ERROR DELETE')
            }
            dispatch(deleteTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchStatusCompleted = createAsyncThunk(
    'Todos/fetchStatusCompleted',
    async function (id, {rejectWithValue, dispatch, getState}) {
        const todo = getState().threeLessons.list.find(e => e.id === id)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            })
            if (!response.ok) {
                throw new Error('ERROR COMPLETED')
            }
            dispatch(statusCompleted({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addNewTodo = createAsyncThunk(
    'Todos/addNewTodo',
    async function(title,{rejectWithValue,dispatch}){

        try {
            const todo = {
                userId: 1,
                completed: false,
                title: title,
            }
            const response = await fetch('https://jsonplaceholder.typicode.com/todos',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(todo)
            })
            if(!response.ok){
                throw new Error('ERROR ADD TODO')
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
        list: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.list.push(action.payload)
        },
        deleteTodo(state, action) {
            state.list = state.list.filter(e => e.id !== action.payload.id)
        },
        statusCompleted(state, action) {
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
        [fetchCanselTodo.rejected]: setError,
        [fetchStatusCompleted.rejected]: setError,

    }
})

const {addTodo, deleteTodo, statusCompleted} = threeLessonsSlice.actions
export default threeLessonsSlice.reducer