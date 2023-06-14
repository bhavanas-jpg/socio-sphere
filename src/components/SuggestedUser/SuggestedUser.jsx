import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetAllUsers, userProfile } from '../../pages/Home/usersSlice';
import "./suggestedUser.css"
import { useNavigate } from 'react-router-dom';


const SuggestedUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(store => store.auth);
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
              <div className="info" onClick={()=>{
                navigate("/profile")
                dispatch(userProfile(user?.username))
                }}>
                <div className="profile-info">
                  <div className="profile-picture">
                    <img src={user?.avatarURL} alt="" />
                  </div>
                  <div>
                    <h4>{user.firstName} </h4>
                  </div>
                  <div class="action">
                    <button class="btn btn-primary">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            ))

          }
        </div>
      </div>
    </section>
  )
}

export default SuggestedUser