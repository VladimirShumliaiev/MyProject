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
                completed: false,
            })
        },
        removeTodo(state, action){
            state.oneLessons = state.oneLessons.filter(e => e.id !== action.payload.id)
        },
        toggleCompleted(state,action){
            const toggle = state.oneLessons.find(e => e.id === action.payload.id)
            toggle.completed = !toggle.completed
        },
    },
});

export const {addText, removeTodo, toggleCompleted} = oneLessonSlice.actions;
export default oneLessonSlice.reducer;