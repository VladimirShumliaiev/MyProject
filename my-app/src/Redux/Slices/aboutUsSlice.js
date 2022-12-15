import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchAboutUsTodo = createAsyncThunk(
    'aboutTodo/fetchAboutUsTodo',
    async (_,{rejectWithValue}) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/?_limit=15`)

            if (!response.ok) {
                throw new Error('Error fetchAboutUsTodo')
            }

            return response.json()

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const removeFetchTodo = createAsyncThunk(
    'aboutTodo/removeFetchTodo',
    async (id, {rejectWithValue, dispatch}) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE'
            })

            if (!response.ok) {
                throw new Error('Error removeFetchTodo')
            }

            dispatch(canselAboutUsTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const statusFetchTodo = createAsyncThunk(
    'aboutTodo/statusFetchTodo',
    async (id, {rejectWithValue,dispatch, getState}) => {
        try {
            const todo = getState().aboutAs.aboutUsTodo.map(e => e.id === id)

            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(todo)
            })

            dispatch(statusAboutUsTodo({id}))

            if (!response.ok) {
                throw new Error('Error statusFetchTodo')
            }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addFetchTodo = createAsyncThunk(
    'aboutTodo/addFetchTodo',
    async (title, {rejectWithValue,dispatch}) => {
        try {
            const todo = {
                userId: 1,
                title: title,
                completed: false,
            }
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(todo)
            })

            if (!response.ok) {
                throw new Error('Error addFetchTodo')
            }

            dispatch(addTodoAboutUs(await response.json()))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const setError = (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
}

const aboutUsSlice = createSlice({
    name: 'aboutTodo',
    initialState: {
        aboutUsTodo: [],
        status: null,
        error: null,
    },

    reducers: {
        addTodoAboutUs(state, action){
            state.aboutUsTodo.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            })
        },
        canselAboutUsTodo(state, action){
            state.aboutUsTodo = state.aboutUsTodo.filter(e => e.id !== action.payload.id)
        },
        statusAboutUsTodo(state, action){
            const toggle = state.aboutUsTodo.find(e => e.id === action.payload.id)
            toggle.completed = ! toggle.completed
        },
    },
    extraReducers: {
        [fetchAboutUsTodo.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchAboutUsTodo.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.aboutUsTodo = action.payload
        },
        [fetchAboutUsTodo.rejected]: setError,
        [removeFetchTodo.rejected]: setError,
        [statusFetchTodo.rejected]: setError,
        [addFetchTodo.rejected]: setError,
    }
})

export const {addTodoAboutUs, canselAboutUsTodo, statusAboutUsTodo} = aboutUsSlice.actions
export default aboutUsSlice.reducer