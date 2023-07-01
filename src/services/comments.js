import axios from "axios";

export const getComments = async(postId) =>{
   return await axios.get(`/api/comments/${postId}`);  
}
export const addComments = async (postId, commentData, token) => {

    return await axios.post(
      `/api/comments/add/${postId}`,
      {
        commentData: commentData,
      },
      {
        headers: { authorization: token },
      }
    );
  };
  
  export const deleteComment = async (postId, commentId, token) => {
    return await axios.post(
      `/api/comments/delete/${postId}/${commentId}`,
      {},
      { headers: { authorization: token } }
    );
  };
  
  export const editComment = async (
    postId,
    commentId,
    commentData,
    token
  ) => {
    return await axios.post(
      `/api/comments/edit/${postId}/${commentId}`,
      { commentData },
      { headers: { authorization: token } }
    );
  };
  