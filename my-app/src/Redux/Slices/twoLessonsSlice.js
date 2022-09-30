import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
        'TwoLessons/fetchTodos',
        async function() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')

            const data = await response.json()
            return data
        }
)


const twoLessonsSlice = createSlice({
    name: 'TwoLessons',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addPost(state, action){
            state.todos.push({
                completed: false,
                title: action.payload.title,
                id: new Date().toISOString(),
            })
        },
        removePost(state, action){
           state.todos = state.todos.filter(e => e.id !== action.payload.id)
        },
        toggleCompleted(state, action){
           const toggle = state.todos.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    },
    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTodos.fulfilled]: (state, action) => {},
        [fetchTodos.rejected]: (state, action) => {},
    }
})

export const {addPost, removePost, toggleCompleted} = twoLessonsSlice.actions
export default twoLessonsSlice.reducer