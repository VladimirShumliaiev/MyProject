import {createSlice} from "@reduxjs/toolkit";

const oneLessonSlice = createSlice({

    name: 'oneLessons',
    initialState: {
        oneLessons: []
    },
    reducers: {
        addText(state,action){
            state.oneLessons.push({
                id: new Date().toISOString(),
                text: action.payload.text,
            })
        },
    },
});

export const {addText} = oneLessonSlice.actions;
export default oneLessonSlice.reducer;