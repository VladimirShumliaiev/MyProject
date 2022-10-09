import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk(
    'threeLessons/fetchTodo',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=25')

            if (!response.ok) {
                throw new Error('Error 1')
            }
            const date = await response.json()

            return date;

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchRemoveTodo = createAsyncThunk(
    'threeLessons/fetchRemoveTodo',
    async function (id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE'
            })
            if (!response.ok) {
                throw new Error('Error 2')
            }
            dispatch(canselTodo({id}))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const toggleStatus = createAsyncThunk(
    'threeLessons/toggleStatus',
    async function(id,{rejectWithValue,dispatch,getState}){
        const todo = getState().threeLessons.todos.find(e => e.id === id)
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
                    method: 'PATCH',
                    headers: {
                        'Content-Type' : 'application-json'
                    },
                    body: JSON.stringify({
                        completed: !todo.completed
                    })
                })
                if(!response.ok){
                    throw new Error('Error 3')
                }
                dispatch(toggleCompleted({id}))
            }catch (error){
                return rejectWithValue(error.message)
            }
    }
)

const setError = (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
}

const threeLessonsSlice = createSlice({
    name: 'threeLessons',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            })
        },
        canselTodo(state, action) {
            state.todos = state.todos.filter(e => e.id !== action.payload.id)
        },
        toggleCompleted(state, action) {
            const toggle = state.todos.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    },
    extraReducers: {
        [fetchTodo.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchTodo.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.todos = action.payload
        },
        [fetchTodo.rejected]: setError,
        [toggleStatus.rejected]: setError,
        [fetchRemoveTodo.rejected]: setError,
    }


})

export const {addTodo, canselTodo, toggleCompleted} = threeLessonsSlice.actions
export default threeLessonsSlice.reducer