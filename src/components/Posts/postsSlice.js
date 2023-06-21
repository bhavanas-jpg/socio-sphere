import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { addBookmark, createPost, deletePost, dislikePost, editPost, getAllBookmarks, getAllPosts, likePost, removeBookmark } from "../../services/posts";
import { updateUser } from "../../services/users";

const initialState={
    isLoading: false,
    allPosts:[],
    bookmarkPosts: [],
    filterPost: "Latest",
   
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

export const handleGetAllBookmarks = createAsyncThunk(
    "posts/handleGetAllBookmarks",
    async(token , thunkAPI) =>{
        try{
            const response = await getAllBookmarks(token);
            return response.data.bookmarks;
        }catch(error){
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const handleAddtoBookmarks = createAsyncThunk(
    "posts/handleAddtoBookmarks", 
    async({postId, token}, thunkAPI)=>{
        try{
        const response = await addBookmark(postId, token);
       return response.data.bookmarks;
        }catch(error){
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const handleRemovefromBookmarks = createAsyncThunk(
    "posts/handleRemovefromBookmarks",
    async({postId, token}, thunkAPI)=>{
        try{
            const response = await removeBookmark(postId, token);
            return response.data.bookmarks;
        }catch(error){
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const handleLikes = createAsyncThunk(
    "posts/handleLikes",
    async({postId, token}, thunkAPI)=>{
        try{
            const response = await likePost(postId, token);
           return response.data.posts;
        }
        catch(error){
            return thunkAPI.rejectWithValue(error); 
        }
    }
)

export const handleDislikes = createAsyncThunk(
    "posts/handleDislikes",
    async({postId, token}, thunkAPI) =>{
        try{
            const response = await dislikePost(postId, token);
            return response.data.posts
        }
        catch(error){
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const handleEditUserPost = createAsyncThunk(
    "users/handleEditUserPost",
    async({postId,post,token}, thunkAPI)=>{
      try{
      const response = await editPost( postId,post,token);
       return response.data.posts;
  
      }catch(error){
        console.error(error);
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
) 

export const handleCreatePost = createAsyncThunk(
    "posts/handleCreatePost",
    async({post,token}, thunkAPI)=>{
        try{
            const response = await createPost(post,token);
            console.log(response.data.posts);
            return response.data.posts;
        }catch(error){
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const handleDeletePost = createAsyncThunk(
    "posts/handleDeletePost",
    async({postId, token}, thunkAPI)=>{
        try{
            const response = await deletePost(postId,token);
            return response.data.posts;
        }catch(error){
            return thunkAPI.rejectWithValue(error);
        }
    }
)


const postsSlice = createSlice(
 {  
     name: "posts",
     initialState,
     reducers:{
     setFilterPost : (state, action)=>{
        return{
            ...state,
            filterPost:action.payload
        }
     }
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
        builder.addCase(handleEditUserPost.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.allPosts =  action.payload;   
        })
        builder.addCase(handleGetAllBookmarks.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(handleGetAllBookmarks.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.bookmarkPosts = action.payload;
        })
        builder.addCase(handleGetAllBookmarks.rejected, (state)=>{
            state.isLoading = false;
        })
        builder.addCase(handleAddtoBookmarks.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(handleAddtoBookmarks.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.bookmarkPosts = [...action.payload];
        })
        builder.addCase(handleAddtoBookmarks.rejected, (state)=>{
            state.isLoading = false;
        })
        builder.addCase(handleRemovefromBookmarks.pending,(state)=>{
            state.isLoading = true;
        })
        builder.addCase(handleRemovefromBookmarks.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.bookmarkPosts = [...action.payload];
        })
        builder.addCase(handleRemovefromBookmarks, (state)=>{
            state.isLoading = false;
        })
        builder.addCase(handleLikes.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(handleLikes.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.allPosts = [...action.payload];
        })
        builder.addCase(handleLikes.rejected, (state)=>{
            state.isLoading = false;
        })
        builder.addCase(handleDislikes.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(handleDislikes.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.allPosts = [...action.payload];
        })
        builder.addCase(handleDislikes.rejected, (state)=>{
            state.isLoading = false
        })
        builder.addCase(handleDeletePost.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(handleDeletePost.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.allPosts = [...action.payload];
        })
        builder.addCase(handleDeletePost.rejected, (state)=>{
            state.isLoading = false;
        })
        builder.addCase(handleCreatePost.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(handleCreatePost.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.allPosts = [...action.payload]
        })
        builder.addCase(handleCreatePost.rejected, (state)=>{
            state.isLoading = false;
        })

     }
}

)

export const {setFilterPost, updateUserPost} = postsSlice.actions;
export const postsReducer = postsSlice.reducer; 