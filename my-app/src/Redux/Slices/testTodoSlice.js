import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const fetchTodoTest = createAsyncThunk(
    'test/fetchTodo',
   async (_,{rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=30')

            if(!response.ok) {
                 throw new Error('Error 1')
            }

            return response.json()

        }catch (error) {
            return rejectWithValue(error.message)
        }

    }
)

export const fetchCanselTodo = createAsyncThunk(
    'test/fetchCanselTodo',
    async (id,{rejectWithValue,dispatch}) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            })
            if(!response.ok) {
                throw new Error('Error 2')
            }

            dispatch(removeTodoTest({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const testTodoSlice = createSlice({
    name: 'test',
    initialState: {
        todoList: [],
        error: null,
        status: null,
    },
    reducers: {
        addTodoTest(state, action){
            state.todoList.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            })

        },
        removeTodoTest(state, action){
            state.todoList = state.todoList.filter(e => e.id !== action.payload.id)
        },
        toggleTodoTest(state, action){
            const toggle = state.todoList.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    },
    extraReducers: {
        [fetchTodoTest.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchTodoTest.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.todoList = action.payload
        },
        [fetchTodoTest.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [fetchCanselTodo.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})
export const {addTodoTest, removeTodoTest, toggleTodoTest} = testTodoSlice.actions
export default testTodoSlice.reducer