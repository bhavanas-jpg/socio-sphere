import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleFollowUser, handleGetAllUsers, userProfile } from '../../pages/Home/usersSlice';
import { handleUserUpdate } from '../../pages/Auth/authSlice';
import "./suggestedUser.css"
import { useNavigate } from 'react-router-dom';


const SuggestedUser = () => {
  const dispatch = useDispatch();
  const { user , token} = useSelector(store => store.auth);
  const { allUsers } = useSelector(store => store.users);
  const navigate = useNavigate();


  const suggestedusers = allUsers.filter(item =>
    user.username !== item.username && !user.following?.some(
      (otherUser) => otherUser.username === item.username
    )
  );



  useEffect(() => {
    dispatch(handleGetAllUsers())
  }, [dispatch])

  return (
    <section className="right">
      <div className="users">
        <h3>Who to Follow</h3>
        <div className="users-container">

          {
            suggestedusers.map(user => (
              <>
              <div className="info" onClick={()=>{
                navigate(`/profile/${user?.username}`)
  
                }}>
                <div className="profile-info">
                  <div className="profile-picture">
                    <img src={user?.avatarURL} alt="" />
                  </div>
                  <div>
                    <h4>{user?.firstName} </h4>
                  </div>                 
                </div>
              </div>
              <div className="action">
              <button 
              onClick={()=>
                {
                  dispatch(handleFollowUser({followerId:user?._id, token, dispatch, handleUserUpdate,userProfile}))
                 
                }
              }
              className="btn btn-primary">
                Follow
              </button>
            </div>
            </>
            ))

          }
        </div>
      </div>
    </section>
  )
}

export default SuggestedUser