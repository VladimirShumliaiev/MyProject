import {configureStore} from "@reduxjs/toolkit";

import homeSlice from "../Slices/homeSlice";
import testTodoSlice from "../Slices/testTodoSlice";
import todoSlice from "../Slices/todoSlice";
import twoLessonsSlice from "../Slices/twoLessonsSlice";
import oneLessonsSlice from "../Slices/oneLessonsSlice";
import threeLessonsSlice from "../Slices/threeLessonsSlice";






export default configureStore({
    reducer: {
        todos: todoSlice,
        posts: homeSlice,
        oneLessons: oneLessonsSlice,
        test: testTodoSlice,
        twoLessons: twoLessonsSlice,
        threeLessons: threeLessonsSlice,
    },
});