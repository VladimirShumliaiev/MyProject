import {configureStore} from "@reduxjs/toolkit";
import addPostReducer from "../Slices/addPostSlice";

export default configureStore({
    reducer: {
        posts: addPostReducer,
    }
})