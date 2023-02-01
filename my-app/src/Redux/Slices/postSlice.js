import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk(
    'post/fetchPost',
    async (_,{rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')

            if (!response.ok) {
                throw new Error(`Error-fetchPost`)
            }

       return response.json()

        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

const postSlice = createSlice({
    name: 'post',
    initialState: {
        post: [],
        status: null,
        error: null,
    },
    reducers: {
        addPost(state, action) {
            state.post.push({
                userId: 1,
                id: new Date().toString(),
                title: action.payload.title,
                body: action.payload.body,
            })
        },
        deletePost(state, action) {
            state.post = state.post.filter(e => e.id !== action.payload.id)
        },
    },
    extraReducers: {
        [fetchPost.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchPost.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.post = action.payload
        },
        [fetchPost.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})


export const {addPost, deletePost} = postSlice.actions
export default postSlice.reducer