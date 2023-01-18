import {configureStore} from "@reduxjs/toolkit";

import homeSlice from "../Slices/homeSlice";
import userSlice from "../Slices/userSlice";
import oneLessonsSlice from "../Slices/oneLessonsSlice";
import threeLessonsSlice from "../Slices/threeLessonsSlice";
import testTodoSlice from "../Slices/testTodoSlice";
import fourthLessonsSlice from "../Slices/fourthLessonsSlice";
import twoLessonsSlice from "../Slices/twoLessonsSlice";
import todosSlice from "../Slices/todosSlice";
import photoSlice from "../Slices/photoSlice";
import aboutUsSlice from "../Slices/aboutUsSlice";
import postSlice from "../Slices/postSlice";


export default configureStore({
    reducer: {
        users: userSlice,
        posts: homeSlice,
        oneLessons: oneLessonsSlice,
        twoLessons: twoLessonsSlice,
        threeLessons: threeLessonsSlice,
        testTodo: testTodoSlice,
        fourthTodo: fourthLessonsSlice,
        todos: todosSlice,
        photo: photoSlice,
        aboutUs: aboutUsSlice,
        myPost: postSlice,
    },
});