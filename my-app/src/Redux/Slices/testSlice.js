import {createSlice} from "@reduxjs/toolkit";


const testSlice = createSlice({
    name: 'test',
    initialState: {
        tests: []
    },
    reducers: {
        addTest(state,action){
            state.tests.push({
                id: new Date().toISOString(),
                text: action.payload.text,
            })
        }
    }
})

export const {addTest} = testSlice.actions;
export default testSlice.reducer;
