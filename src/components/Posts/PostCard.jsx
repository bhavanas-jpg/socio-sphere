import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTimeDifference } from '../../helpers/getTimeDifference';
import {
  handleAddtoBookmarks, handleDeletePost, handleDislikes,
  handleEditUserPost,
  handleLikes, handleRemovefromBookmarks
} from './postsSlice';
import Modal from '../Modal/Modal';
import EditPost from '../Form/EditPost';
import { useNavigate } from 'react-router-dom';
import Comments from '../Comments/Comments';


const PostCard = ({ post }) => {


  const [showActionBtns, setShowActionBtns] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { token, user } = useSelector(store => store.auth);
  const { bookmarkPosts } = useSelector(store => store.posts);
  const { allUsers } = useSelector(store => store.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userImg = allUsers?.find(user => user?.username === post?.username);
  const isEdit = true;






  return (
    <div className="feed" key={post?._id}>
      <div className="head">
        <div className="user">
          <div className="profile-picture">
            <img src={userImg?.avatarURL} alt={userImg?.avatarURL} />
          </div>
          <div className="info">
            <h3>{post?.firstName} {post?.lastName}</h3>
            <small>{getTimeDifference(post?.createdAt)}</small>
          </div>
        </div>
        <div className="edit__container">
          <div className="edit__icon">
            {
              post?.username === user?.username ?
                <div className="edit"
                  onClick={() => {
                    setShowActionBtns(!showActionBtns);
                  }}
                >
                  <i class="uil uil-ellipsis-h"></i>
                </div> : <span></span>
            }
          </div>
          <div>
            {
              showActionBtns &&
              <ul className="post__action--btns">
                <li onClick={() => {
                  dispatch(handleEditUserPost({ postId: post?._id, post, token }));
                  setShowModal(true);
                  setShowActionBtns(false);
                }
                }>
                  Edit

                </li>
                <li
                  onClick={() => {
                    dispatch(handleDeletePost({ postId: post?._id, token }))
                    setShowActionBtns(false);
                  }
                  }>
                  Delete
                </li>
              </ul>
            }
          </div>
        </div>
      </div>
      <div className="photo">
        <img src={post?.mediaURL} alt={post?.mediaURL} />
      </div>
      <div className="action-buttons">
        <div className="interaction-buttons">
          <span>
            {
              post?.likes?.likedBy.find((likedUser) => likedUser.username === user?.username) ?
                <svg
                  onClick={() => dispatch(handleDislikes({ postId: post?._id, token }))}
                  class="uil uil-heart active" width="1em" height="1em" viewBox="0 0 32 32">
                  <path d="M16 29.3l-1.4-1.4C5.8 20.2 2 15.8 2 10.6 2 6.5 5.5 3 9.6 3c2.4 0 4.8 1.1 6.4 3C18.8 4.1 21.2 3 23.6 3 27.7 3 31 6.5 31 10.6c0 5.2-3.8 9.6-12.6 17.3L16 29.3z" />
                </svg>
                :
                <i
                  onClick={() => dispatch(handleLikes({ postId: post?._id, token }))}
                  class="uil uil-heart"></i>
            }
          </span>
          <span><i
            onClick={() => navigate(`/post/${post?.id}`)}
            class="uil uil-comment-dots"></i></span>
          <span><i class="uil uil-share-alt"></i></span>
        </div>
        <div className="bookmark">
          {
            bookmarkPosts?.find(id => id === post?._id) ?
              <svg
                onClick={() => dispatch(handleRemovefromBookmarks({ postId: post?._id, token }))}
                class="uil uil-bookmark-full active" width="1em" height="1em" viewBox="0 0 32 32">
                <path d="M6 2h20c1.1 0 2 .9 2 2v26l-12-6-12 6V4c0-1.1.9-2 2-2z" />
              </svg>
              :
              <i
                onClick={() => dispatch(handleAddtoBookmarks({ postId: post?._id, token }))}
                class="uil uil-bookmark-full "></i>
          }
        </div>
      </div>
      <div className="liked-by">
        {
          !post?.likes?.likedBy?.length ? "" :
            (
              <>
                {
                  post?.likes?.likedBy?.slice(1).map(like =>
                  (
                    <span>
                      <img src={like?.avatarURL} alt={like?.avatarURL} />
                    </span>
                  ))
                }
                {!post?.likes?.likedBy.length ? " " : <p>Liked by
                  {
                    post?.likes?.likedBy?.slice(2).map(like =>
                    (
                      <b>{like?.username},</b>
                    ))
                  }
                  and others
                </p>
                }
              </>
            )
        }
      </div>
      <div className="caption">
        <p><b>{post?.firstName} {post?.lastName}</b>
          {post?.content}
          <p className="hash-tag">{post?.hashtags}</p>
        </p>
      </div>
      <Comments post={post} />
      {showModal && <Modal modalBody={<EditPost
        post={post} setShowModal={setShowModal}
      />}
        setShowModal={setShowModal}
        edit={isEdit}
      />}

    </div>
  )
}

export default PostCard