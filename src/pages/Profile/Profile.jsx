import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "./profile.css"
import { Link, useParams } from 'react-router-dom';
import Posts from '../../components/Posts/Posts';
import { handleFollowUser, handleUnfollowUser } from '../Home/usersSlice';
import { handleUserUpdate } from '../Auth/authSlice';
import Modal from '../../components/Modal/Modal';
import EditProfile from "../../components/Form/EditProfile"

const Profile = () => {

  const [showModal,setShowModal] = useState(false)
  const {username} = useParams();
  const dispatch = useDispatch();
  const {token} = useSelector(store => store.auth);
 const {allPosts} = useSelector(store => store.posts);
 const {allUsers} = useSelector(store => store.users);
 const {user} = useSelector(store => store.auth);
 const currentUser = allUsers.find((user)=> user.username === username);
 const userPosts = allPosts.filter((post)=> post.username === username);


 const isFollowing = (user) => user?.following?.find(({ username }) => username === currentUser?.username);
 console.log(isFollowing);

  return (
    <>
    <div>
    <section class="profile">
     <div className="profile-picture">
      <img src={currentUser?.avatarURL} alt={currentUser?.username} />
     </div>
     <div className="handle">
      <h4>{currentUser?.firstName}  {currentUser?.lastName}</h4>
      <p className="text-muted">{currentUser?.username}</p>
      <p> {currentUser?.bio}</p>
      <Link target="_blank" to={currentUser?.website}>{currentUser?.website}</Link>
      <p>
      <span> {currentUser?.followers.length} Followers</span>{" "}
      <span>{currentUser?.following.length} Following</span>
      </p>  
      {user?.username === currentUser?.username ? 
        <button
        onClick={()=>{
         setShowModal(true)
      
        }}
        >
        edit
        </button>
        :
        isFollowing(currentUser)? (
           <button
           onClick={()=>{
            dispatch(handleUnfollowUser({followerId: currentUser?._id, token, dispatch, handleUserUpdate}))
           }}
           >unfollow</button>
        ):(<button
          onClick={()=>
            {
              dispatch(handleFollowUser({followerId:currentUser?._id, token, dispatch, handleUserUpdate}))           
            }
          }
          className="btn btn-primary"
        >{!isFollowing(currentUser) ?"follow" :"following "}</button>)       
      }
      {showModal && <Modal modalBody={<EditProfile  currentUser={currentUser} setShowModal={setShowModal}/>} setShowModal={setShowModal}/>}
     </div>
    </section>
     <Posts posts={userPosts}/>
     </div>
     </>
  )
}

export default Profile