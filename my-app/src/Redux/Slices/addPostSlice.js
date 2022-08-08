import {createSlice} from "@reduxjs/toolkit";

const addPostSlice = createSlice({
    name: 'posts',
    initialState: {
        post: []
    },
    reducers: {
        addPosts(state, action) {
            state.post.push({
                id: new Date().toISOString(),
                text: action.payload.text,
            })
        },
    },
});

export const {addPosts} = addPostSlice.actions;
export default addPostSlice.reducer;

