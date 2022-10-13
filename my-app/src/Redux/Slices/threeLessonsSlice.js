import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk(
    'Todos/fetchTodo',
    async function(_,{rejectWithValue}){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=35')
            if(!response.ok){
                throw new Error('ERROR')
            }
            const data = response.json()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    },
)

export const fetchCanselTodo = createAsyncThunk(
    'Todos/fetchCanselTodo',
    async function(id,{rejectWithValue,dispatch}){
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
                method: 'DELETE'
            })
            if (!response.ok) {
                throw new Error('ERROR 2')
            }
            dispatch(canselTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchStatusTodo = createAsyncThunk(
    'Todos/fetchStatusTodo',
    async function(id,{rejectWithValue,dispatch,getState}){
        const todo = getState().threeLessons.todoList.find(e => e.id === id)
        try {

            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    completed:  !todo.completed
                })
            })
            if(!response.ok) {
                throw new Error('ERROR 3')
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
                title: title,
                completed: false,
            }
            const response = await fetch('https://jsonplaceholder.typicode.com/todos',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(todo)
            })
            if (!response.ok){
                throw new Error('ERROR 4')
            }
            const data = await response.json()
            dispatch(addTodos(data))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const setError = (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
}

export const threeLessonsSlice = createSlice({
    name: 'Todos',
    initialState: {
        todoList: [],
        status: null,
        error: null,

    },
    reducers: {
        addTodos(state, action){
            state.todoList.push(action.payload)
        },
        statusCompleted(state, action){
           const toggleCompleted = state.todoList.find(e => e.id === action.payload.id)
            toggleCompleted.completed = !toggleCompleted.completed
        },
        canselTodo(state, action){
            state.todoList = state.todoList.filter(e => e.id !== action.payload.id)
        },
    },
    extraReducers: {
        [fetchTodo.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchTodo.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.todoList = action.payload
        },
        [fetchTodo.rejected]:setError,
        [fetchCanselTodo.rejected]: setError,
        [fetchStatusTodo.rejected]: setError,
    }
})

const {addTodos, statusCompleted, canselTodo} = threeLessonsSlice.actions
export default threeLessonsSlice.reducer