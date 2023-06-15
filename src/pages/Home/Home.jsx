import React from 'react'
import Posts from '../../components/Posts/Posts'
import { useSelector } from 'react-redux'
import { getUserFeed } from '../../helpers/getUserFeed';

const Home = () => {

  const {user} = useSelector(store => store.auth);
  const {allPosts} = useSelector(store => store.posts);
//  const homePosts = allPosts.filter(({username})=> username === user?.username && user?.following)

//  const homePosts = getUserFeed(allPosts, user?.following, user?.username)

  return (
    <>
    <Posts posts={allPosts}/>
    </>
  )
}

export default Home