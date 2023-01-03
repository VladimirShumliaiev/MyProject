import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const fetchAboutTodo = createAsyncThunk(
    'about/fetchAboutTodo',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')

            if (!response.ok) {
                throw new Error('Error-fetchAboutTodo')
            }

            return response.json()

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const completedAboutFetch = createAsyncThunk(
    'about/completedAboutFetch',
    async (id, {rejectWithValue, getState, dispatch}) => {
        const todo = getState().aboutUs.aboutTodo.find(e => e.id === id)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(todo)
            })

            if (!response.ok) {
                throw new Error('Error-completedAboutFetch')
            }

            dispatch(toggleTodoAbout({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteFetchTodo = createAsyncThunk(
    'about/deleteFetchTodo',
    async (id, {dispatch, rejectWithValue}) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE'
            })

            if (!response.ok) {
                throw new Error('Error-deleteFetchTodo')
            }

            dispatch(removeTodoAbout({id}))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addTodoAboutFetch = createAsyncThunk(
    'about/addTodoAbout',
    async (title, {dispatch, rejectWithValue}) => {
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
                throw new Error('Error-addTodoAbout')
            }

            dispatch(addTodoAbout(await response.json()))

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
    name: 'about',
    initialState: {
        aboutTodo: [],
        error: null,
        status: null,
    },

    reducers: {
        addTodoAbout(state, action) {
            state.aboutTodo.push(action.payload)
        },
        removeTodoAbout(state, action) {
            state.aboutTodo = state.aboutTodo.filter(e => e.id !== action.payload.id)
        },
        toggleTodoAbout(state, action) {
            const toggle = state.aboutTodo.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    },
    extraReducers: {
        [fetchAboutTodo.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchAboutTodo.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.aboutTodo = action.payload
        },
        [fetchAboutTodo.rejected]: setError,
        [completedAboutFetch.rejected]: setError,
        [deleteFetchTodo.rejected]: setError,
        [addTodoAboutFetch.rejected]: setError,
    }
})

export const {addTodoAbout, removeTodoAbout, toggleTodoAbout} = aboutUsSlice.actions
export default aboutUsSlice.reducer
