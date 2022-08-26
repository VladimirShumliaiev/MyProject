import {createSlice} from "@reduxjs/toolkit";

const oneLessonsSlice = createSlice({

    name: 'oneLessons',
    initialState: {
        oneLessons: ['']
    },
    reducers: {
        addText(state,action){
            state.push({
                id: new Date().toISOString(),
                text: action.payload.text,
            })
        },
    },
});

export const {addText} = addPostSlice.actions;
export default addPostSlice.reducer;