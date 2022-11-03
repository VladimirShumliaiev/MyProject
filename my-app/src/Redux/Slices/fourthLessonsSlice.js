import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const fetchTodoFourth = createAsyncThunk(
    'todo/fetchTodoFourth',
    async(_,{rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')

            if (!response.ok) {
                throw new Error('ERROR FETCH')
            }

            return response.json()

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
        addTodoFourth(state, action){
            state.todos.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false
            })
        },
        removeTodoFourth(state, action){
            state.todos = state.todos.filter(e => e.id !== action.payload.id)
        },
        toggleTodoFourth(state, action){
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
    }
})
export const {addTodoFourth, removeTodoFourth, toggleTodoFourth} = fourthLessonsSlice.actions
export default fourthLessonsSlice.reducer