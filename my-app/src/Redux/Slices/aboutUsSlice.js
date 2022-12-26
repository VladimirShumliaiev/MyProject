import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const fetchAboutUsTodo = createAsyncThunk(
    'aboutU/fetchAboutUsTodo',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=15')

            if (!response.ok) {
                throw new Error('Error fetchAboutUsTodo')
            }

            return response.json()

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addTodoAboutFetch = createAsyncThunk(
    'aboutUs/addTodoAboutFetch',
    async (title, {rejectWithValue, dispatch}) => {
        const todo = {
            userId: 1,
            title: title,
            completed: false,
        }
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
              method: 'POST',
              headers: {
                  'Content-type': 'application/json'
              },
              body: JSON.stringify(todo)
          })

            if (!response.ok) {
                throw new Error('Error addTodoAboutFetch')
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
    name: 'aboutUs',
    initialState: {
        todo: [],
        status: null,
        error: null,
    },

    reducers: {
        addTodoAbout(state, action) {
            state.todo.push(action.payload)
        },
        deleteTodoAbout(state, action) {
            state.todo = state.todo.filter(e => e.id !== action.payload.id)
        },
        toggleTodoAbout(state, action) {
            const toggle = state.todo.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        }
    },
    extraReducers: {
        [fetchAboutUsTodo.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchAboutUsTodo.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.todo = action.payload
        },
        [fetchAboutUsTodo.rejected]: setError,
        [addTodoAboutFetch.rejected]: setError,

    }
})

export const {addTodoAbout, deleteTodoAbout, toggleTodoAbout} = aboutUsSlice.actions
export default aboutUsSlice.reducer