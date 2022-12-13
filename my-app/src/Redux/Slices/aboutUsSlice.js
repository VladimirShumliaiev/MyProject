import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchAboutUsTodo = createAsyncThunk(
    'aboutTodo/fetchAboutUsTodo',
    async (_,{rejectWithValue}) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)

            if (!response.ok) {
                throw new Error('Error fetchAboutUsTodo')
            }

            return response.json()

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const aboutUsSlice = createSlice({
    name: 'aboutTodo',
    initialState: {
        aboutUsTodo: []
    },

    reducers: {
        addTodoAboutUs(state, action){
            state.aboutUsTodo.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            })
        },
        canselAboutUsTodo(state, action){
            state.aboutUsTodo = state.aboutUsTodo.filter(e => e.id !== action.payload.id)
        },
        statusAboutUsTodo(state, action){
            const toggle = state.aboutUsTodo.find(e => e.id === action.payload.id)
            toggle.completed = ! toggle.completed
        },
    }
})

export const {addTodoAboutUs, canselAboutUsTodo, statusAboutUsTodo} = aboutUsSlice.actions
export default aboutUsSlice.reducer