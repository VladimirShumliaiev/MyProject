import {createSlice} from "@reduxjs/toolkit";


const postSlice = createSlice({
    name: 'post',
    initialState: {
        post: []
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
    }
})

export const {addPost, deletePost} = postSlice.actions
export default postSlice.reducer