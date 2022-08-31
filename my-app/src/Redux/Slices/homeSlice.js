import {createSlice} from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [
            {
                ava: 'https://mobimg.b-cdn.net/v3/fetch/9d/9db2d4683d92f5f2045e9142fbd82633.jpeg',
                text: 'Whats your name',
                like: 453,
            },
            {
                ava: 'https://mobimg.b-cdn.net/v3/fetch/9d/9db2d4683d92f5f2045e9142fbd82633.jpeg',
                text: 'Whats your ',
                like: 1000,
            },
            {
                ava: 'https://mobimg.b-cdn.net/v3/fetch/9d/9db2d4683d92f5f2045e9142fbd82633.jpeg',
                text: 'Whats ',
                like: 4535,
            },
        ]
    },
    reducers: {
        addPosts(state, action) {
            state.posts.push({
                ava: `https://planbphoto.com/wp-content/uploads/Serze.jpg`,
                id: new Date().toISOString(),
                text: action.payload.text,
                like: 565,
            })
        },
    },
});

export const {addPosts} = homeSlice.actions;
export default homeSlice.reducer;

