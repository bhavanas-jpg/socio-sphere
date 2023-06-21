import axios from "axios";

export const getAllPosts = async() =>{
    return await axios.get("/api/posts")
}
export const getAllBookmarks = async(token)=>{
    return await axios.get("/api/users/bookmark",
    {
    headers: {authorization: token},
    })
}
export const addBookmark = async(postId, token)=>{
    return await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
            headers:{authorization: token}
        }
    );
}
export const removeBookmark = async(postId, token)=>{
    return await axios.post( `/api/users/remove-bookmark/${postId}`,
    {},
    {
        headers:{authorization: token}
    }
    );
}
export const likePost = async(postId, token)=>{
    return await axios.post(`/api/posts/like/${postId}`,
    {},
    {
        headers:{authorization: token}
    })
}

export const dislikePost = async(postId, token)=>{
    return await axios.post(`/api/posts/dislike/${postId}`,
    {},
    {
        headers:{authorization : token}
    })
}

export const createPost = async(post, token)=>{
    return await axios.post(`/api/posts`,
    {
        postData: post
    },
    {
        headers: {authorization: token}
    })
}

export const editPost = async(postId, post,token)=>{
    return await axios.post(
        `/api/posts/edit/${postId}`,
        {
            postData:post
        },
        {
            headers: {authorization: token}
        }
    )
}

export const deletePost = async(postId, token)=>{
    console.log(postId);
    console.log(token);
    return await axios.delete(`/api/posts/${postId}`,
    {
        headers: {authorization :token}
    }
    )
}