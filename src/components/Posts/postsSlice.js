import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getAllPosts } from "../../services/posts";

const initialState={
    allPosts:[],
    isLoading: false
}

export const handleGetAllPosts = createAsyncThunk(
    "posts/handleGetAllPosts",
    async(_, thunkAPI)=>{
        try{
        const response = await getAllPosts();
        return response.data.posts;
 
        }catch(error){
            return thunkAPI.rejectWithValue(
                error.response.data
            )
        }
    }
)



const postsSlice = createSlice(
 {  
     name: "posts",
     initialState,
     reducers:{

     },
     extraReducers: (builder) =>{
        builder.addCase(handleGetAllPosts.pending ,(state) =>{
            state.isLoading = true;
        })
        builder.addCase(handleGetAllPosts.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.allPosts = action.payload;
        })
        builder.addCase(handleGetAllPosts.rejected, (state)=>{
            state.isLoading = false;
        })
     }
}

)

export const postsReducer = postsSlice.reducer; 