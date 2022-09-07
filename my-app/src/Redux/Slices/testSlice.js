import {createSlice} from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: 'test',
    initialState: {
        tests: []
    },
    reducers: {
        addTest(state,action) {
            state.tests.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
        },
        removeTest(state,action) {
            state.tests = state.tests.filter(e => e.id !== action.payload.id)
        },
        toggleTest(state,action) {
            const toggleToTest = state.tests.find(e => e.id === action.payload.id);
            toggleToTest.completed = ! toggleToTest.completed
        }
    }
})

export const {addTest,removeTest,toggleTest} = testSlice.actions;
export default testSlice.reducer;