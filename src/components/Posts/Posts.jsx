import React, { useEffect } from 'react'
import { handleGetAllPosts } from './postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import "./posts.css"
import { getTimeDifference } from '../../helpers/getTimeDifference';

const Posts = ({ posts }) => {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(handleGetAllPosts())
  }, [dispatch])


  return (
    <section>
      <div className="feeds">
        {
          posts.map(post => (
            <div className="feed">
              <div className="head">
                <div className="user">
                  <div className="profile-picture">
                    <img src={post?.avatarURL} alt={post?.avatarURL} />
                  </div>
                  <div className="info">
                    <h3>{post?.firstName} {post?.lastName}</h3>
                    <small>{getTimeDifference(post?.createdAt)}</small>
                  </div>
                </div>
                <span className="edit">
                  <i class="uil uil-ellipsis-h"></i>
                </span>
              </div>
              <div className="photo">
                <img src={post?.mediaURL} alt={post?.mediaURL} />
              </div>
              <div class="action-buttons">
                <div class="interaction-buttons">
                  <span><i class="uil uil-heart"></i></span>
                  <span><i class="uil uil-comment-dots"></i></span>
                  <span><i class="uil uil-share-alt"></i></span>
                </div>
                <div class="bookmark">
                  <span><i class="uil uil-bookmark-full "></i></span>
                </div>
              </div>
              <div class="caption">
                    <p><b>{post?.firstName} {post?.lastName}</b>
                   {post?.content}
                    <p class="hash-tag">{post?.hashtags}</p> 
                    </p>
                </div>
            </div>
          ))
        }

      </div>
    </section>
  )
}

export default Posts