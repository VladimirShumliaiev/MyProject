import {createSlice} from "@reduxjs/toolkit";


const testSlice = createSlice({
    name: 'test',
    initialState: {
        tests: []
    },
    reducers:{
        addTests(state,action){
            state.tests.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false
            })
        },
        removeTodo(state,action){
            state.tests = state.tests.filter(todo => todo.id !== action.payload.id)
        },
        toggleCompleted(state,action){
            const toggleTodo = state.tests.find(todo => todo.id === action.payload.id);
            toggleTodo.completed = !toggleTodo.completed;
        }
    }
})

export const {addTests,removeTodo,toggleCompleted} = testSlice.actions;
export default testSlice.reducer;