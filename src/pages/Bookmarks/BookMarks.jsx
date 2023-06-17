import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetAllBookmarks } from '../../components/Posts/postsSlice';
import Posts from '../../components/Posts/Posts';

const BookMark = () => {

  const {token} = useSelector(store => store.auth);
  const {allPosts} = useSelector(store =>store.posts);
  const dispatch = useDispatch();
  const {bookmarkPosts} = useSelector(store => store.posts);

const bookmarkedPosts = allPosts.filter(({_id}) => bookmarkPosts.includes(_id))
console.log(bookmarkedPosts , "bookmarked posts");

  useEffect(()=>{
    dispatch(handleGetAllBookmarks(token))
  },[dispatch])
  return (
    <div>
      {
        !bookmarkPosts.length ? <p>No posts bookmarked</p> :
        <Posts posts={bookmarkedPosts}/>
      }

    </div>
  )
}

export default BookMark