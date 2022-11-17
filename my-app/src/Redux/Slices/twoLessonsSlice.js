import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const fetchTwoTodo = createAsyncThunk(
    'TwoTodos/fetchTwoTodo',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=27')

            if (!response.ok) {
                throw new Error('Error FetchTwoTodo')
            }

            return response.json()

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchToggleTwoTodo = createAsyncThunk(
    'TwoTodos/fetchToggleTwoTodo',
    async (id, {rejectWithValue, dispatch, getState}) => {
        const todo = getState().twoLessons.twoTodo.find(event => event.id === id)
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

            dispatch(toggleTwoTodo({id}))

            if (!response.ok) {
                throw new Error('Error: fetchToggleTwoTodo')
            }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchRemoveTwoTodo = createAsyncThunk(
    'TwoTodos/fetchRemoveTwoTodo',
    async (id, {rejectWithValue, dispatch}) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('ERROR fetchRemoveTwoTodo')
            }

            dispatch(removeTwoTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchAddTwoTodo = createAsyncThunk(
    'TwoTodos/fetchAddTwoTodo',
    async (title,{rejectWithValue,dispatch}) => {
        try {
            const todo = {
                title: title,
                userId: 1,
                completed: false
            }
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(todo)
            })

            if (!response.ok) {
                throw new Error('Error fetchAddTwoTodo')
            }

            dispatch(addTwoTodo(await response.json()))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const setError = (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
}

const twoLessonsSlice = createSlice({
    name: 'TwoTodos',
    initialState: {
        twoTodo: [],
        error: null,
        status: null,
    },
    reducers: {
        addTwoTodo(state, action) {
            state.twoTodo.push(action.payload)
        },
        removeTwoTodo(state, action) {
            state.twoTodo = state.twoTodo.filter(event => event.id !== action.payload.id)
        },
        toggleTwoTodo(state, action) {
            const toggle = state.twoTodo.find(event => event.id === action.payload.id)
            toggle.completed = !toggle.completed
        }
    },

    extraReducers: {
        [fetchTwoTodo.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchTwoTodo.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.twoTodo = action.payload
        },
        [fetchTwoTodo.rejected]: setError,
        [fetchToggleTwoTodo.rejected]: setError,
        [fetchRemoveTwoTodo.rejected]: setError,
        [fetchAddTwoTodo.rejected]: setError,
    }
})

export const {addTwoTodo, removeTwoTodo, toggleTwoTodo} = twoLessonsSlice.actions
export default twoLessonsSlice.reducer
