import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetAllBookmarks } from '../../components/Posts/postsSlice';
import Posts from '../../components/Posts/Posts';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import SuggestedUser from '../../components/SuggestedUser/SuggestedUser';

const BookMark = () => {

  const {token} = useSelector(store => store.auth);
  const {allPosts} = useSelector(store =>store.posts);
  const dispatch = useDispatch();
  const {bookmarkPosts} = useSelector(store => store.posts);

const bookmarkedPosts = allPosts.filter(({_id}) => bookmarkPosts.includes(_id))


  useEffect(()=>{
    dispatch(handleGetAllBookmarks(token))
  },[dispatch])
  return (
    <>
      <Header />
     <div className="main">
     <div className="container">
     <div>
    <Navbar />
    </div>
    <div  className="middle">
      {
        !bookmarkPosts.length ? <p>No posts bookmarked</p> :
        <Posts posts={bookmarkedPosts}/>
      }
    </div>
    <div>
    <SuggestedUser />
    </div>
    </div>
    </div>
    </>
  )
}

export default BookMark