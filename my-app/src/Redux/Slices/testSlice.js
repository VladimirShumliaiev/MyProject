import {createSlice} from "@reduxjs/toolkit";


const testSlice = createSlice({
    name: 'test',
    initialState: {
        tests: []
    },
    reducers: {
        addTest(state, action) {
            state.tests.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
        },
        removeTest(state,action){
            state.tests = state.tests.filter(e => e.id !== action.payload.id)
        },
        toggleToCompletedTest(state,action){
          const toggleTest = state.tests.find(e => e.id === action.payload.id)
            toggleTest.completed = !toggleTest.completed;

        }
    }
})

export const {addTest,removeTest,toggleToCompletedTest} = testSlice.actions;
export default testSlice.reducer;