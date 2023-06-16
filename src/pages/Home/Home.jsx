import React from 'react'
import Posts from '../../components/Posts/Posts'
import { useSelector } from 'react-redux'


const Home = () => {

  const {user} = useSelector(store => store.auth);
  const {allPosts} = useSelector(store => store.posts);
 const homePosts = allPosts.filter((post)=>
 user?.following?.some(
  (following) => following.username === post.username || post.username === user.username
 )
 )

  return (
    <>
    <Posts posts={homePosts}/>
    </>
  )
}

export default Home