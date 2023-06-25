import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "./profile.css"
import { Link, useParams } from 'react-router-dom';
import Posts from '../../components/Posts/Posts';
import { handleFollowUser, handleUnfollowUser } from '../Home/usersSlice';
import { handleUserUpdate } from '../Auth/authSlice';
import Modal from '../../components/Modal/Modal';
import EditProfile from "../../components/Form/EditProfile"
import SuggestedUser from '../../components/SuggestedUser/SuggestedUser';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';

const Profile = () => {

  const [showModal, setShowModal] = useState(false)
  const { username } = useParams();
  const dispatch = useDispatch();
  const { token } = useSelector(store => store.auth);
  const { allPosts } = useSelector(store => store.posts);
  const { allUsers } = useSelector(store => store.users);
  const { user } = useSelector(store => store.auth);
  const currentUser = allUsers.find((user) => user.username === username);
  const userPosts = allPosts.filter((post) => post.username === username);


  const isFollowing = (user) => user?.following?.find(({ username }) => username === currentUser?.username);


  return (
    <>
    <Header />
     <div className="main">
     <div className="container">
     <div>
    <Navbar />
    </div>

      <div>      
        <section class="profile">
          <div className="profile-picture">
            <img src={currentUser?.avatarURL} alt={currentUser?.username} />
          </div>
          <div className="handle">
            <div>
            <h3>{currentUser?.firstName}  {currentUser?.lastName}</h3>
            <p className="text-muted username__text">{currentUser?.username}</p>
            <p> {currentUser?.bio}</p>
            <Link 
            className="website__link"
            target="_blank" to={currentUser?.website}>{currentUser?.website}</Link>
            <p className="follow__sec">
              <p>
              <b>{currentUser?.followers.length}</b> 
              <span className="text-muted">Followers</span>
              </p>
            {" "}
            <p>
            <b>{currentUser?.following.length} </b>
              <span className="text-muted">Following</span>
            </p>
            </p>
            </div>
            <div>
            {user?.username === currentUser?.username ?
             <div>
               <i 
                onClick={() => {
                  setShowModal(true)
                }}
               className="uil uil-edit"></i>
              </div>
              :
              isFollowing(currentUser) ? (
                <button
                  onClick={() => {
                    dispatch(handleUnfollowUser({ followerId: currentUser?._id, token, dispatch, handleUserUpdate }))
                  }}
                >unfollow</button>
              ) : (<button
                onClick={() => {
                  dispatch(handleFollowUser({ followerId: currentUser?._id, token, dispatch, handleUserUpdate }))
                }
                }
                className="btn btn-primary"
              >{!isFollowing(currentUser) ? "follow" : "following "}</button>)
            }
            </div>
           
            
            {showModal && <Modal modalBody={<EditProfile currentUser={currentUser} setShowModal={setShowModal} />} setShowModal={setShowModal} />}
          </div>
        </section>


        <Posts posts={userPosts} />
      </div>
      <div>
    <SuggestedUser />
    </div>
      </div>
      </div>

    </>
  )
}

export default Profile