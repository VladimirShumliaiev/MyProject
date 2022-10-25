import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";



export const fetchTodo = createAsyncThunk(
    'threeLessons/fetchTodo',
    async (_,{rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')

            if (!response.ok) {
              throw new Error('Error #1')
            }

            return await response.json()

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const completedFetchTodo = createAsyncThunk(
    'threeLessons/completedFetchTodo',
    async (id,{rejectWithValue,dispatch,getState}) => {
        const todo = getState().threeLessons.todos.find(e => e.id === id)
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

            if(!response.ok) {
                throw new Error('Error #2')
            }

            dispatch(completedTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const canselTodoFetch = createAsyncThunk(
    'threeLessons/canselTodoFetch',
    async (id,{rejectWithValue, dispatch}) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE'
            })

            if(!response.ok) {
                throw new Error('Error #3')
            }
            dispatch(removeTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addNewTodo = createAsyncThunk(
    'threeLessons/addNewTodo',
    async (title,{rejectWithValue,dispatch}) => {
        try {
            const todo = {
                title: title,
                completed: false,
                userId: 1
            }
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(todo)
            })
            if(!response.ok) {
                throw new Error('Error: #4')
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

const threeLessonsSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },

    reducers: {
        addTodo(state,action){
            state.todos.push(action.payload)
        },
        removeTodo(state, action){
            state.todos = state.todos.filter(e => e.id !== action.payload.id)
        },
        completedTodo(state, action){
            const toggle = state.todos.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        }
    },
    extraReducers: {
        [fetchTodo.pending]: (state) => {
            state.status = 'Pending'
            state.error = null
        },
        [fetchTodo.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.todos = action.payload
        },
        [fetchTodo.rejected]:setError,
        [completedFetchTodo.rejected]: setError,
    }
})

const {addTodo, removeTodo, completedTodo} = threeLessonsSlice.actions
export default threeLessonsSlice.reducer