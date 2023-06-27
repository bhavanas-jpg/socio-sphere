import React, { useEffect, useState } from 'react';
import "./comments.css"
import { useDispatch, useSelector } from 'react-redux'
import { handleAddComment, handleDeleteComment, handleEditComment, handleGetAllPosts } from '../Posts/postsSlice';
import { getTimeDifference } from '../../helpers/getTimeDifference';

const Comments = ({ post,setShowComments }) => {
  const { postComments } = useSelector(store => store.comments);
  const dispatch = useDispatch();
  const { user, token } = useSelector(store => store.auth);
  const { allUsers } = useSelector(store => store.users);
  const { allPosts } = useSelector(store => store.posts);
  const [showActionBtns, setShowActionBtns] = useState(false);

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

  const commentArr = currentPost?.comments ?? [];
  console.log(commentArr);
  const sortedComments = [...commentArr].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  



  return (
    <div>
      <div className="comment_user--sec">
        <div class="profile-picture"><img src={currentUser?.avatarURL} /></div>
        <div>
          <p className="fw-bold" >{currentUser?.firstName} {currentUser?.lastName}</p>
          <p className="text-muted comment__username">@{currentUser?.username}</p>
          <span></span>
        </div>
      </div>

      <div className="comment__sec">
        <textarea
          placeholder="comment here"
          onChange={handleChange}
          value={commentText}
          cols="20" rows="3"></textarea>

        <button
          className="btn btn-primary fw-bold"
          disabled={!commentText.length}
          onClick={
            () => {
              dispatch(handleAddComment({ postId: post?._id, commentData: commentText, token }));
              setCommentText("");

            }
          }>Reply</button>
      </div>


      {sortedComments?.map(({ _id, firstName, lastName,
        text, username, avatarURL, createdAt }) => (
        <div>
          <div className="all__comments">
            <div class="profile-picture"><img src={avatarURL} /></div>
            <div>
              <p className="fw-bold" >{firstName} {lastName}</p>
              <p className="text-muted comment__username">@{username}
                <span className="commented__time">{getTimeDifference(createdAt)}</span> </p>

            </div>
          </div>
          <div className="comment__action--btns">
         
        
          {
            isEdit && currentUser?.username === username ?
              <div className="comment__sec update">
                <textarea value={editText} cols="20" rows="3"
                  onChange={(e) => setEditText(e.target.value)}
                >
                </textarea>
                <button
                 className="btn btn-primary fw-bold"
                  onClick={() => {
                    dispatch(handleEditComment({ postId: post?._id, commentId: _id, commentData: editText, token }))
                    setIsEdit(false)
                  }}
                >Update</button>
              </div> : <p className="comment">{text}</p>
          }
         
         
           <div>
           {currentUser?.username === username &&
            <div>
              <div className="edit"
                onClick={() => {
                  setShowActionBtns(!showActionBtns);
                }}
              >
                <i class="uil uil-ellipsis-h"></i>
              </div>
              <div>
                {
                  showActionBtns &&
                  <ul className="post__action--btns">
                    <li onClick={() => {
                      setIsEdit(true);
                      setEditText(text);
                      setShowActionBtns(false);
                    }}
                    >Edit</li>
                    <li
                      onClick={() =>
                        {
                          dispatch(handleDeleteComment({
                            postId: post?._id, commentId: _id, token
                          }));
                          setShowActionBtns(false);
                        } }
                    >Delete</li>
                  </ul>
                }
              </div>
            </div>
          }
           </div>
           </div>



        </div>
      ))}

    </div>
  )
}

export default Comments