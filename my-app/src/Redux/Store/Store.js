import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../Slices/todoSlice";
import oneLessonsSlice from "../Slices/oneLessonsSlice";



export default configureStore({
    reducer: {
        todos: todoSlice,
        // posts: addPostSlice,
        oneLessons: oneLessonsSlice,
    },
});