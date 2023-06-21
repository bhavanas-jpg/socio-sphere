import React, { useState } from 'react'
import Posts from '../../components/Posts/Posts'
import { useDispatch, useSelector } from 'react-redux';
import "./home.css"
import { handleCreatePost, setFilterPost } from '../../components/Posts/postsSlice';


const Home = () => {

  const {user, token} = useSelector(store => store.auth);
  const {allPosts, filterPost} = useSelector(store => store.posts);
  const sortTypes = ["Oldest", "Latest", "Trending"];
  const [postValues, setPostValues] = useState({
    content: "",
    mediaURL:"",
    avatarURL: user?.avatarURL,
    firstName: user?.firstName,
    lastName: user?.lastName
  })
  const dispatch = useDispatch();

 const homePosts = allPosts.filter((post)=>
 user?.following?.some(
  (following) => following.username === post.username || post.username === user.username)
 )

 const resetForm =()=>{
  setPostValues(prev=> ({...prev,content:"", mediaURL:"" }))
 }

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
 const changePictureHandler =(e) =>{
  const file = e.target.files[0];
  if(file?.type.startsWith("image/")){
      if(file.size < 10 * 1024 * 1024){
        setPostValues((prev)=>({
              ...prev,
              mediaURL: URL.createObjectURL(file)
          }));
      }else{
          alert("file must be less than 10mb");
      }
  }else{
      alert("file must be an image (JPEG/PNG)");
  }
}
 
  return (
    <>
  
    <div> 
    <form className="create-post"
    onSubmit={(e)=>{
      e.preventDefault();
     dispatch(handleCreatePost({post:postValues, token}))
     resetForm();
    }}
    >
        <div className='profile-picture'>
          <img src={user?.avatarURL} alt={user?.username} />
        </div>
       <input 
       onChange={(e)=> setPostValues({...postValues,  content: e.target.value}) }
       type="text" 
       value={postValues.content}
       placeholder="What's on your mind" />
       <input 
       type="file"
       style={{opacity:0}}
      onChange={changePictureHandler}
       />
       <button
       type="submit"
       disabled={!postValues.content.length}
         className="btn btn-primary" >Post</button>
      </form>
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