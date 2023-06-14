import React from 'react'
import { useSelector } from 'react-redux';
import "./profile.css"
import { Link } from 'react-router-dom';
import Posts from '../../components/Posts/Posts';

const Profile = ({user}) => {
 const {allPosts} = useSelector(store => store.posts)
  return (
    <>
    <div>
    <section class="profile">
     <div className="profile-picture">
      <img src={user?.avatarURL} alt="" />
     </div>
     <div className="handle">
      <h4>{user?.firstName}  {user?.lastName}</h4>
      <p className="text-muted">{user?.username}</p>
      <p> {user?.bio}</p>
      <Link target="_blank" to={user?.website}>{user?.website}</Link>
      <p>
      <span> {user?.followers.length} Followers</span>{" "}
      <span>{user?.following.length} Following</span>
      </p>     
     </div>
    
    </section>
     <Posts posts={allPosts}/>
     </div>
     </>
  )
}

export default Profile