import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import "./posts.css"

import PostCard from './PostCard';
import { handleGetAllPosts } from './postsSlice';


const Posts = ({ posts }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetAllPosts())
  }, [dispatch])


  return (
    <section>
      <div className="feeds">
        {
          posts?.map((post)=> (
            <PostCard key={post._id} post={post} />
          ))
        }

      </div>
    </section>
  )
}

export default Posts