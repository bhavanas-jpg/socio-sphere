import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "../pages/Auth/authSlice";
import { userReducer } from "../pages/Home/usersSlice";
import { postsReducer } from "../components/Posts/postsSlice";
import {commentsReducer} from "../components/Comments/commentsSlice"

export const store = configureStore({
    reducer:{
        auth: authReducer,
        users: userReducer,
        posts: postsReducer,
        comments: commentsReducer 
    }
})