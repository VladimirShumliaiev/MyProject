import {createSlice} from "@reduxjs/toolkit";


const testSlice = createSlice({
    name: 'addSms',
    initialState: {
        sms: []
    },
    reducers: {
        addSms(state,action) {
            state.sms.push({
                id: new Date().toISOString(),
                text: action.payload.text,
            })
        }
    }
})

export const {addSms} = testSlice.actions;
export default testSlice.reducer;
