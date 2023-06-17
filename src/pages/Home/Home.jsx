import React from 'react'
import Posts from '../../components/Posts/Posts'
import { useDispatch, useSelector } from 'react-redux';
import "./home.css"
import { setFilterPost } from '../../components/Posts/postsSlice';


const Home = () => {

  const {user} = useSelector(store => store.auth);
  const {allPosts, filterPost} = useSelector(store => store.posts);
  const sortTypes = ["Oldest", "Latest", "Trending"];
  const dispatch = useDispatch();

 const homePosts = allPosts.filter((post)=>
 user?.following?.some(
  (following) => following.username === post.username || post.username === user.username)
 )

 const sortedPosts =(filterType, homePosts)=>{
  if(filterType === "Latest"){
    const sortedPosts = homePosts.sort(
      (a,b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return sortedPosts;
  }
  if(filterType === "Oldest"){
    const sortedPosts = homePosts.sort(
      (a,b) => new Date(a.createdAt) - new Date(b.createdAt)
    )
    return sortedPosts;
  }else{
    const sortedPosts = homePosts.sort(
      (a,b)=> b.likes.likeCount - a.likes.likeCount
    );
    return sortedPosts;
  }
 }
 
  return (
    <>
    <div>
      <ul className="filter-lists">
      {
        sortTypes.map((type)=>(
          <li
          key={type}
          className={type === filterPost ? "isActive" : ""}
          onClick={()=>dispatch(setFilterPost(type))}
          >{type}</li>
        ))
      }
      </ul>
         <Posts  posts={sortedPosts(filterPost, homePosts)}/> 
    </div>
   
    </>
  )
}

export default Home