import {configureStore} from "@reduxjs/toolkit";

import homeSlice from "../Slices/homeSlice";
import userSlice from "../Slices/userSlice";
import oneLessonsSlice from "../Slices/oneLessonsSlice";
import threeLessonsSlice from "../Slices/threeLessonsSlice";
import testTodoSlice from "../Slices/testTodoSlice";
import fourthLessonsSlice from "../Slices/fourthLessonsSlice";
import twoLessonsSlice from "../Slices/twoLessonsSlice";


export default configureStore({
    reducer: {
        users: userSlice,
        posts: homeSlice,
        oneLessons: oneLessonsSlice,
        twoLessons: twoLessonsSlice,
        threeLessons: threeLessonsSlice,
        testTodo: testTodoSlice,
        fourthTodo: fourthLessonsSlice,
    },
});