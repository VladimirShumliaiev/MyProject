import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const fetchTestTodo = createAsyncThunk(
    'test/fetchTestTodo',
    async (_,{rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=15')

            if (!response.ok) {
                throw new Error('Error - fetchTodo')
            }

            return response.json()

        } catch (error) {
           return  rejectWithValue(error.message)
        }
    }
)

export const statusTodo = createAsyncThunk(
    'test/statusTodo',
    async (id,{rejectWithValue,dispatch,getState}) => {
        try {
            const todo = getState().testTodo.testTodos.find(e => e.id === id)

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
                throw new Error('Error - statusTodo')
            }

            dispatch(completedTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteTodoFetch = createAsyncThunk(
    'test/deleteTodoFetch',
    async (id,{rejectWithValue,dispatch}) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('Error - deleteTodoFetch')
            }

            dispatch(deleteTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const newTodo = createAsyncThunk(
    'test/newTodo',
    async (title,{rejectWithValue,dispatch}) => {
        try {
            const todo = {
                userId: 1,
                completed: false,
                title: title
            }
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(todo)
            })

            if (!response.ok) {
                throw new Error('Error - newTodo')
            }

           dispatch(addTodo(await response.json()))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const setError = (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
}

const testTodoSlice = createSlice({
    name: 'test',
    initialState: {
        testTodos: [],
        error: null,
        status: null,
    },
    reducers: {
        addTodo(state, action){
            state.testTodos.push(action.payload)
        },
        deleteTodo(state, action){
            state.testTodos = state.testTodos.filter(e => e.id !== action.payload.id)
        },
        completedTodo(state, action){
            const toggle = state.testTodos.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    },
    extraReducers: {
        [fetchTestTodo.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchTestTodo.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.testTodos = action.payload
        },
        [fetchTestTodo.rejected]: setError,
        [statusTodo.rejected]: setError,
        [deleteTodoFetch.rejected]: setError,
    }
})

export const {addTodo, deleteTodo, completedTodo} = testTodoSlice.actions
export default testTodoSlice.reducer