import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const fetchTestTodos = createAsyncThunk(
    'test/fetchTestTodos',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
            if (!response.ok) {
                throw new Error('Server Error!')
            }

            const data = await response.json()

            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)

export const deleteTestTodo = createAsyncThunk(
    'test/deleteTestTodo',
    async function (id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            })
            if (!response.ok) {
                throw new Error('Can\'t deleted task. Server error')
            }

            dispatch(removeTestTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const toggleStatus = createAsyncThunk(
    'test/toggleStatus',
    async function (id, {rejectWithValue, dispatch, getState}) {
        const todo = getState().test.testTodo.find(e => e.id === id)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !todo.completed,
                })
            })

            if (!response.ok) {
                throw new Error('Can\'t toggle task. Server error')
            }
         dispatch(toggleCompleted({id}))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const testTodoSlice = createSlice({
    name: 'test',
    initialState: {
        testTodo: [],
        status: null,
        error: null,
    },
    reducers: {
        addTestTodo(state, action) {
            state.testTodo.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
        },
        toggleCompleted(state, action) {
            const toggle = state.testTodo.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
        removeTestTodo(state, action) {
            state.testTodo = state.testTodo.filter(e => e.id !== action.payload.id)
        },

    },
    extraReducers: {
        [fetchTestTodos.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchTestTodos.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.testTodo = action.payload
        },
        [fetchTestTodos.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
})

export const {addTestTodo, toggleCompleted, removeTestTodo} = testTodoSlice.actions
export default testTodoSlice.reducer