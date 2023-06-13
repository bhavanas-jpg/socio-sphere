import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "../pages/Auth/authSlice";
import { userReducer } from "../pages/Home/usersSlice";



export const store = configureStore({
    reducer:{
        auth: authReducer,
        users: userReducer
       
    }
})