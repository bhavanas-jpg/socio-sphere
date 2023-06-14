import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../../services/users";
import { v4 as uuid } from "uuid";

const initialState={
    allUsers: [],
    isLoading: false,
    user:{
        firstName: "Bhavana",
    lastName: "S",
    username: "bhavana",
    email: "bhavanas@gmail.com",
    password: "bhavanaS123",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg",
    following: [
      {
        _id: uuid(),
        firstName: "Afreen",
        lastName: "Almaz",
        username: "Afreen",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-20_k20z1j.jpg"
      },
      {
        _id: uuid(),
        firstName: "Amelia",
        lastName: "Thompson",
        username: "AmeliaT",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-3_luauyf.jpg"
      },
      {
        _id: uuid(),
        firstName: "Sophia",
        lastName: "Anderson",
        username: "SophiaA",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg"
      }
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Amelia",
        lastName: "Thompson",
        username: "AmeliaT",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-3_luauyf.jpg"
      },
      {
        _id: uuid(),
        firstName: "Lucas",
        lastName: "Parker",
        username: "LParker22",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg"
      }
    ],
    bio: "Software Developer",
    website: "https://bhavanas-portfolio.netlify.app/"
    }
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
    reducers:{
        userProfile: (state,action)=>{
         const profileUser = state.allUsers.find(user => user.username === action.payload);
         return {
            ...state,
            user: profileUser
         }
        }
    },
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

export const {userProfile} = userSlice.actions;
export const userReducer = userSlice.reducer;