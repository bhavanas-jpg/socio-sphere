import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AUTHKEY } from "../../utils/constants";
import { loginService, signupService } from "../../services/auth";

const initialState = {
    user: JSON.parse(localStorage.getItem(AUTHKEY))?.user,
    token: JSON.parse(localStorage.getItem(AUTHKEY))?.token,
    isLoading: false
}

export const handleLogin = createAsyncThunk(
    "auth/handleLogin",
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await loginService(username, password);
            return response.data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue("Username or password is incorrect")
        }
    })

export const handleSignup = createAsyncThunk(
    "auth/handleSignup",
    async ({ firstName, lastName, username, password }, thunkAPI) => {
        try {
            const response = await signupService(firstName, lastName, username, password);
            return response.data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue("Username or password is incorrect")
        }
    }
)





const authSlice = createSlice({
    name: "auth",
    initialState,
    reducer: {
        handleLogout: (state) => {
            localStorage.removeItem(AUTHKEY);
            state.user = null;
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(handleLogin.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(handleLogin.fulfilled, (state, action) => {
            state.user = action.payload.foundUser;
            state.token = action.payload.encodedToken;
            localStorage.setItem(
                AUTHKEY,
                JSON.stringify({
                    user: action.payload.foundUser,
                    token: action.payload.encodedToken,
                })
            );
        });
        builder.addCase(handleLogin.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(handleSignup.pending, (state)=> {
            state.isLoading = true; 
        })
        builder.addCase(handleSignup.fulfilled, (state,action)=>{
            state.user = action.payload.createdUser;
            state.token = action.payload.encodedToken;
            localStorage.setItem(
                AUTHKEY,
                JSON.stringify({
                    user: action.payload.createdUser,
                    token: action.payload.encodedToken
                })
            )
        });
        builder.addCase(handleSignup.rejected, (state,action)=>{
            state.isLoading = false;
        })









    }

})

export const authReducer = authSlice.reducer;