import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const fetchTodos = createAsyncThunk(
    'threeLessons/fetchTodos',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=25')

            if (!response.ok) {
                throw new Error('Error !!!')
            }
            const data = await response.json()

            return data


        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteTodo = createAsyncThunk(
    'threeLessons/deleteTodo',
    async function (id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            })
            if (!response.ok) {
                throw new Error('No delete');
            }

            dispatch(canselTodo({id}));

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const toggleStatus = createAsyncThunk(
    'threeLessons/toggleStatus',
    async function (id, {rejectWithValue, dispatch, getState}) {
        const todo = getState().threeLessons.todos.find(e => e.id === id)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            });
            if (!response.ok) {
                throw new Error('No toggle');
            }

            dispatch(toggleCompleted({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addNewTodo = createAsyncThunk(
    'threeLessons/addNewTodo',
    async function (title, {rejectWithValue,dispatch}) {
        try {
            const todo = {
                userId: 1,
                title: title,
                completed: false,
            }

            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(todo)
            })
            if(!response.ok){
                throw new Error('NO ADD NEW TODO')
            }

            const data = await response.json();
            dispatch(addTodo(data))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const threeLessonsSlice = createSlice({
    name: 'threeLessons',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        canselTodo(state, action) {
            state.todos = state.todos.filter(e => e.id !== action.payload.id)
        },
        toggleCompleted(state, action) {
            const toggle = state.todos.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = 'LOADING';
            state.error = null;

        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: setError,
        [deleteTodo.rejected]: setError,
    }
})

const {addTodo, canselTodo, toggleCompleted} = threeLessonsSlice.actions
export default threeLessonsSlice.reducer