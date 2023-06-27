import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetAllComments } from './commentsSlice';
import { handleAddComment, handleDeleteComment, handleEditComment, handleGetAllPosts } from '../Posts/postsSlice';

const Comments = ({ post }) => {
  const { postComments } = useSelector(store => store.comments);
  const dispatch = useDispatch();
  const { user, token } = useSelector(store => store.auth);
  const { allUsers } = useSelector(store => store.users);
  const { allPosts } = useSelector(store => store.posts);

  const currentUser = allUsers.find(({ username }) => username === user?.username);

  const currentPost = allPosts.find(({ _id }) => _id === post?._id);
  const [commentText, setCommentText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState("");


  useEffect(() => {
    dispatch(handleGetAllPosts())
  }, [])

  const handleChange = (e) => {
    setCommentText(e.target.value);
  }
 

  return (
    <div>
      <p>{currentUser?.username}</p>
      <textarea
        placeholder="comment here"
        onChange={handleChange}
        value={commentText}
        cols="30" rows="5"></textarea>
      <button onClick={
        () => {
          dispatch(handleAddComment({ postId: post?._id, commentData: commentText, token }));
          setCommentText("");
        }
      }>add</button>

      {currentPost?.comments?.map(({ _id, firstName, lastName,
        text, username, avatarURL, createdAt }) => (
        <div>

          <div class="profile-picture"><img src={avatarURL} /></div>

          {
            isEdit && currentUser?.username === username ?
              <div>
                <textarea value={editText} cols="20" rows="4"
                  onChange={(e) => setEditText(e.target.value)}
                >

                </textarea>
                <button
                  onClick={() => {
                    dispatch(handleEditComment({ postId: post?._id, commentId: _id, commentData: editText, token }))
                    setIsEdit(false)
                  }}
                >update</button>
              </div> : <p>{text}</p>
          }


          {currentUser?.username === username &&
            <div>
              <button onClick={() => {
                setIsEdit(true);
                setEditText(text);
              }}> edit</button>
              <button
                onClick={() => dispatch(handleDeleteComment({
                  postId: post?._id, commentId: _id, token
                }))}
              >delete</button>
            </div>
          }
        </div>
      ))}

    </div>
  )
}

export default Comments