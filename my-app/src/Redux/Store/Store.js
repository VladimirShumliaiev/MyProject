import {configureStore} from "@reduxjs/toolkit";

import homeSlice from "../Slices/homeSlice";
import testTodoSlice from "../Slices/testTodoSlice";
import userSlice from "../Slices/userSlice";
import twoLessonsSlice from "../Slices/twoLessonsSlice";
import oneLessonsSlice from "../Slices/oneLessonsSlice";
import threeLessonsSlice from "../Slices/threeLessonsSlice";






export default configureStore({
    reducer: {
        users: userSlice,
        posts: homeSlice,
        oneLessons: oneLessonsSlice,
        test: testTodoSlice,
        twoLessons: twoLessonsSlice,
        threeLessons: threeLessonsSlice,
    },
});