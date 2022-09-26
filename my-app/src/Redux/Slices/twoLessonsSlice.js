import {createSlice} from "@reduxjs/toolkit";


const twoLessonsSlice = createSlice({
    name: 'TwoLessons',
    initialState: {
        posts: [
            {
                ava: 'https://tn.fishki.net/20/preview/38151.jpg',
                text: 'Hello add text plz...',
                id: 1,
            }
        ]
    },
    reducers: {
        addPost(state, action){
            state.posts.push({
                ava: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/11A0A/production/_109220227_body_yongqing-bao.jpg',
                text: action.payload.text,
                id: new Date().toISOString(),
            })
        },
        removePost(state, action){
           state.posts = state.posts.filter(e => e.id !== action.payload.id)
        },
    }
})

export const {addPost, removePost} = twoLessonsSlice.actions
export default twoLessonsSlice.reducer