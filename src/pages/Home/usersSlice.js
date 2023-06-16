import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { followUser, getAllUsers, unfollowUser } from "../../services/users";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";

const initialState={
    allUsers: [],
    isLoading: false,
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

export const handleFollowUser = createAsyncThunk(
  "users/handleFollowUser",
  async({followerId, token, dispatch, handleUserUpdate}, thunkAPI)=>{
    try{
    const response = await followUser(followerId, token);
    dispatch(handleUserUpdate({userData:response.data.user, token}));
    return response.data;  
    }catch(error){
      console.error(error);
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

export const handleUnfollowUser = createAsyncThunk(
  "users/handleUnfollowUser",
  async({followerId, token, dispatch, handleUserUpdate}, thunkAPI)=>{
    try{
    const response = await unfollowUser(followerId, token);
    dispatch(handleUserUpdate({userData: response.data.user, token}))
    }catch(error){
      console.error(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)


const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        }
    ,
    extraReducers: (builder)=>{
        builder.addCase(handleGetAllUsers.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(handleGetAllUsers.fulfilled ,(state,action)=>{
            state.isLoading= false;
            state.allUsers = action.payload;
        })
        builder.addCase(handleGetAllUsers.rejected , (state)=>{
            state.isLoading= false;
        })
        builder.addCase(handleFollowUser.pending, (state)=>{
          state.isLoading = true;
        })
        builder.addCase(handleFollowUser.fulfilled, (state,action)=>{
          state.isLoading = false;
          state.allUsers =action.payload.allUsers;
      
        })
        builder.addCase(handleFollowUser.rejected, (state)=>{
          state.isLoading = false;
        })
        builder.addCase(handleUnfollowUser.pending, (state)=>{
          state.isLoading = true;
        })
        builder.addCase(handleUnfollowUser.fulfilled, (state,action)=>{
          state.isLoading = false;
          state.allUsers =action.payload.allUsers;
      
        })
        builder.addCase(handleUnfollowUser.rejected, (state)=>{
          state.isLoading = false;
        })
        
    }
})

export const {userProfile} = userSlice.actions;
export const userReducer = userSlice.reducer;