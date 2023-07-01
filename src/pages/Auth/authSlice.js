import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AUTHKEY } from "../../utils/constants";
import { loginService, signupService } from "../../services/auth";
import { updateUser } from "../../services/users";




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
    async ({ firstName, lastName, username, password,avatarURL }, thunkAPI) => {
        try {
            const response = await signupService(firstName, lastName, username, password,avatarURL);
            return response.data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue("Username or password is incorrect")
        }
    }
)

export const handleUserUpdate = createAsyncThunk(
    "auth/handleUserUpdate",
    async({userData, token}, thunkAPI) =>{  
        try{
            const response = await updateUser(userData, token);   
            return response.data;           
        }catch(error){
            return thunkAPI.rejectWithValue("Unable to update user, try again!")
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
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

        builder.addCase(handleSignup.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(handleSignup.fulfilled, (state, action) => {
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
        builder.addCase(handleSignup.rejected, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(handleUserUpdate.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(handleUserUpdate.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.user = action.payload.user;
            localStorage.setItem(
                AUTHKEY,
                JSON.stringify({user: action.payload.user,token:state.token })
            )
        });
        builder.addCase(handleUserUpdate.rejected, (state)=>{
            state.isLoading = false;
        });
    }

})

export const { handleLogout } = authSlice.actions;
export const authReducer = authSlice.reducer;