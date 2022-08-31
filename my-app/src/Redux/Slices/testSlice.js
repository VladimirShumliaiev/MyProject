import {createSlice} from "@reduxjs/toolkit";


const testSlice = createSlice({
    name: 'testSlice',
    initialState: {
        test: []
    },
    reducers: {
       addTest(state,action){
           state.test.push({
               id: new Date().toISOString(),
               text: action.payload.text,
           })
       },
    },
});

export const {addTest} = testSlice.actions;
export default testSlice.reducer;
