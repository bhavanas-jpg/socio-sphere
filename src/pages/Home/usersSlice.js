import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../../services/users";

const initialState={
    allUsers: [],
    isLoading: false
}

export const handleGetAllUsers = createAsyncThunk(
    "users/handleGetAllUsers",
    async(_, thunkAPI)=>{
        try{
            const response = await getAllUsers();    
            return response.data.users
        }catch(error){
            console.error(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(handleGetAllUsers.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(handleGetAllUsers.fulfilled ,(state,action)=>{
            state.isLoading= false;
            state.allUsers = action.payload;
        })
        builder.addCase(handleGetAllUsers.rejected , (state,action)=>{
            state.isLoading= false;
        })
        
    }
})

export const userReducer = userSlice.reducer;