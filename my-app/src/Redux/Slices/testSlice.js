import {createSlice} from "@reduxjs/toolkit";


const testSlice = createSlice({
    name: 'test',
    initialState: {
        test: []
    },
    reducers: {
        addTest(state,action){
            state.test.push({
                id: new Date().toISOString(),
                completed: false,
                text: action.payload.text,
            })
        },
        testRemove(state,action){
            state.test = state.test.filter(e => e.id !== action.payload.id)
        },
        testToggleCompleted(state,action){
            const toggleTest = state.test.find(e => e.id === action.payload.id)
            toggleTest.completed = !toggleTest.completed
        }
    }
})

export const {addTest,testRemove,testToggleCompleted} = testSlice.actions;

export default testSlice.reducer;