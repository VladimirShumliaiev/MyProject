import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const fetchTodoFourth = createAsyncThunk(
    'todo/fetchTodoFourth',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=20')

            if (!response.ok) {
                throw new Error('ERROR FETCH')
            }

            return response.json()

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchDelete = createAsyncThunk(
    'todo/fetchDelete',
    async (id, {rejectWithValue, dispatch}) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE'
            })

            if (!response.ok) {
                throw new Error('ERROR DELETE')
            }

            dispatch(removeTodoFourth({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchToggle = createAsyncThunk(
    'todo/fetchToggle',
    async (id, {rejectWithValue, dispatch, getState}) => {
        const todo = getState().fourthTodo.todos.find(e => e.id === id)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application-json'
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            })

            if (!response.ok) {
                throw new Error('ERROR COMPLETED STATUS')
            }

            dispatch(toggleTodoFourth({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addNewTodo = createAsyncThunk(
    'todo/addNewTodo',
    async (title, {rejectWithValue, dispatch}) => {
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
                throw new Error('ERROR ADD TODO')
            }

            dispatch(addTodoFourth(await response.json()))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const error = (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
}

const fourthLessonsSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodoFourth(state, action) {
            state.todos.push(action.payload)
        },
        removeTodoFourth(state, action) {
            state.todos = state.todos.filter(e => e.id !== action.payload.id)
        },
        toggleTodoFourth(state, action) {
            const toggle = state.todos.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    },
    extraReducers: {
        [fetchTodoFourth.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchTodoFourth.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.todos = action.payload
        },
        [fetchTodoFourth.rejected]: error,
        [fetchDelete.rejected]: error,
        [fetchToggle.rejected]: error,
        [addNewTodo.rejected]: error,
    }
})
const {addTodoFourth, removeTodoFourth, toggleTodoFourth} = fourthLessonsSlice.actions
export default fourthLessonsSlice.reducer