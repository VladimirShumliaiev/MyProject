import {createSlice} from "@reduxjs/toolkit";

const homeSlice = createSlice({
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

export const {addPosts} = homeSlice.actions;
export default homeSlice.reducer;

