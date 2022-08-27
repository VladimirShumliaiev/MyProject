import {createSlice} from "@reduxjs/toolkit";

const oneLessonsSlice = createSlice({

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

export const {addText} = oneLessonsSlice.actions;
export default oneLessonsSlice.reducer;