import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../Slices/todoSlice";
import addPostSlice from "../Slices/addPostSlice";


export default configureStore({
    reducer: {
        todos: todoSlice,
        posts: addPostSlice,
    },
});