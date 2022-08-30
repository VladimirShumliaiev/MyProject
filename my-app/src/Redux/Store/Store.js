import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../Slices/todoSlice";
import oneLessonsSlice from "../Slices/oneLessonsSlice";
import homeSlice from "../Slices/homeSlice";



export default configureStore({
    reducer: {
        todos: todoSlice,
        posts: homeSlice,
        oneLessons: oneLessonsSlice,
    },
});