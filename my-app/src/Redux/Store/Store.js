import {configureStore} from "@reduxjs/toolkit";
import oneLessonsSlice from "../Slices/oneLessonsSlice";
import homeSlice from "../Slices/homeSlice";
import testTodoSlice from "../Slices/testTodoSlice";
import todoSlice from "../Slices/todoSlice";




export default configureStore({
    reducer: {
        todos: todoSlice,
        posts: homeSlice,
        oneLessons: oneLessonsSlice,
        test: testTodoSlice,


    },
});