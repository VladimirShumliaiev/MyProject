import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchThreeLessons = createAsyncThunk(
    'three/fetchThreeLessons',
    async (_,{rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=32')

            if (!response.ok) {
                throw new Error('Error fetchThreeLessons!!!')
            }

            return response.json()

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchToggle = createAsyncThunk(
    'three/fetchToggle',
    async (id,{rejectWithValue,dispatch,getState}) => {
        try {
            const todo = getState().threeLessons.threeTodo.find(e => e.id === id)

            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    completed: !todo.completed
                }),
            })

            if (!response.ok) {
                throw new Error('ERROR fetchToggle!!!')
            }

            dispatch(threeToggleTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const threeLessonsSlice = createSlice({
    name: 'three',
    initialState: {
        threeTodo: [],
        error: null,
        status: null,
    },
    reducers: {
        addTodo(state, action){
            state.threeTodo.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false
            })
        },
        threeRemoveTodo(state, action){
            state.threeTodo = state.threeTodo.filter(e => e.id !== action.payload.id)
        },
        threeToggleTodo(state, action){
            const toggle = state.threeTodo.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    },
    extraReducers: {
        [fetchThreeLessons.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchThreeLessons.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.threeTodo = action.payload
        },
        [fetchThreeLessons.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export const {addTodo, threeRemoveTodo, threeToggleTodo} = threeLessonsSlice.actions
export default threeLessonsSlice.reducer