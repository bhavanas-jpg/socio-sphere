import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "../pages/Auth/authSlice";
import { userReducer } from "../pages/Home/usersSlice";
import { postsReducer } from "../components/Posts/postsSlice";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        users: userReducer,
        posts: postsReducer  
    }
})