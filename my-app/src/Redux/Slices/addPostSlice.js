import {createSlice} from "@reduxjs/toolkit";

const addPostSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    reducers: {
        addPosts(state, action) {
            state.posts.push({
                id: new Date().toISOString(),
                text: action.payload.text,
            })
        },
    },
});

export const {addPosts} = addPostSlice.actions;
export default addPostSlice.reducer;

