import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import SuggestedUser from '../../components/SuggestedUser/SuggestedUser';
import Header from '../../components/Header/Header';
import PostCard from '../../components/Posts/PostCard';
import { handleGetAllPosts } from '../../components/Posts/postsSlice';

const PostDetail = () => {
    const {postId} = useParams();
   const { allPosts } = useSelector(store => store.posts);
   const post = allPosts?.find((post)=> post?.id === postId);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetAllPosts())
  }, [])



  return (
   <>
    <Header />
    <section className="postdetail__sec">
    <div className="main">
      <div className=" post-container">
        
          <Navbar />
        
           <div className="middle">
            <PostCard post={post} showComment={true} />
            </div>
       
            <SuggestedUser />
          
    </div>
    </div>
   </section>
   </>
  )
}

export default PostDetail