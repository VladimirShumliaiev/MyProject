import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    'TwoLessons/fetchTodos',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')

            if (!response.ok) {
                throw new Error('Server Erorr.')
            }
            const data = await response.json()

            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)

export const fetchDelete = createAsyncThunk(
    'TwoLessons/fetchDelete',
    async function (id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            })
            if (!response.ok) {
                throw new Error('Can\'t delete task. Error.')
            }
            dispatch(removeTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchToggleCompleted = createAsyncThunk(
    'TwoLessons/fetchToggleCompleted',
    async function (id, {rejectWithValue, dispatch, getState}) {
        const todo = getState().twoLessons.todos.find(e => e.id === id)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            });
            if (!response.ok) {
                throw new Error('Can\'t toggle status. Error.')
            }
            dispatch(toggleCompleted({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addNewTodo = createAsyncThunk(
    'TwoLessons/addNewTodo',
    async function (title, {rejectWithValue, dispatch}) {
        try {
            const todo = {
                title: title,
                userId: 1,
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
                throw new Error('Error add todos')
            }
            const data = await response.json()
            dispatch(addPost(data))

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
    name: 'TwoLessons',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addPost(state, action) {
            state.todos.push(action.payload)
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(e => e.id !== action.payload.id)
        },
        toggleCompleted(state, action) {
            const toggle = state.todos.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: setError,
        [fetchDelete.rejected]: setError,
        [fetchToggleCompleted.rejected]: setError,
    }
})

const {addPost, removeTodo, toggleCompleted} = twoLessonsSlice.actions
export default twoLessonsSlice.reducer