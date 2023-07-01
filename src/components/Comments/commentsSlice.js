import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { addComments, editComment, getComments } from "../../services/comments";

const initialState={
    isLoading : false,
    postComments : []
}

export const handleGetAllComments = createAsyncThunk(
    "comments/handleGetAllComments",
    async( {postId}, thunkAPI)=>{
        
        try{
            const response = await getComments(postId);
          return response.data.comments ;
        }catch(error){
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)




const commentsSlice = createSlice(
    {
        name: "comments",
        initialState,
        reducers:{

        },
        extraReducers: (builder)=>{
            builder.addCase(handleGetAllComments.pending ,(state) =>{
                state.isLoading = true;
            })
            builder.addCase(handleGetAllComments.fulfilled, (state,action)=>{
                state.isLoading = false;
                state.postComments = action.payload;
            })
            builder.addCase(handleGetAllComments.rejected, (state)=>{
                state.isLoading = false;
            })
           


        }
    }
)

export const commentsReducer = commentsSlice.reducer;