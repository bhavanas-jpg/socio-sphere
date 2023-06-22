import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTimeDifference } from '../../helpers/getTimeDifference';
import { handleAddtoBookmarks, handleDeletePost, handleDislikes, 
    handleEditUserPost, 
    handleLikes, handleRemovefromBookmarks } from './postsSlice';
import Modal from '../Modal/Modal';
import EditPost from '../Form/EditPost';


const PostCard = ({post}) => {
    const {_id, avatarURL,
        firstName, lastName, mediaURL, username ,
        content, hashtags, createdAt,likes:{likedBy} } = post;
        const [showActionBtns, setShowActionBtns] = useState(false);
        const [showModal, setShowModal] = useState(false);
        const {token, user} = useSelector(store => store.auth);
        const {bookmarkPosts} = useSelector(store => store.posts);
        const {allUsers} = useSelector(store => store.users);
        const dispatch = useDispatch();

        const userImg = allUsers?.find(user => user?.username === username );
        console.log(userImg);
        const isEdit = true;

  return (
    <div className="feed" key={_id}>
              <div className="head">
                <div className="user">
                  <div className="profile-picture">
                    <img src={userImg?.avatarURL} alt={avatarURL} />
                  </div>
                  <div className="info">
                    <h3>{firstName} {lastName}</h3>
                    <small>{getTimeDifference(createdAt)}</small>
                  </div>
                </div>              
                 <div>
                  {
                    username ===user?.username ?
                    <span className="edit"
                    onClick={()=>
                      {
                        setShowActionBtns(!showActionBtns);                     
                      }}
                    >
                    <i class="uil uil-ellipsis-h"></i>
                  </span> : <span></span>
                  }           
               {
                showActionBtns &&
                <div className="post__action--btns">
                  <button 
                  onClick={()=> {
                    dispatch(handleEditUserPost({postId:_id, post, token}));
                    setShowModal(true);
                    setShowActionBtns(false);
                  }                 
                  }
                  >Edit</button>
                  <button onClick={ ()=>{
                     dispatch(handleDeletePost({postId:_id, token}))
                    setShowActionBtns(false);
                  }                   
                    }>Delete</button>
                </div>
               }
                 </div>         
              </div>
              <div className="photo">
                <img src={mediaURL} alt={mediaURL} />
              </div>
              <div className="action-buttons">
                <div className="interaction-buttons">
                <span>
                  {
                    likedBy.find((likedUser)=> likedUser.username === user?.username) ?              
                    <svg
                    onClick={()=> dispatch(handleDislikes({postId:_id, token})) }
                    class="uil uil-heart active" width="1em" height="1em" viewBox="0 0 32 32">
                    <path d="M16 29.3l-1.4-1.4C5.8 20.2 2 15.8 2 10.6 2 6.5 5.5 3 9.6 3c2.4 0 4.8 1.1 6.4 3C18.8 4.1 21.2 3 23.6 3 27.7 3 31 6.5 31 10.6c0 5.2-3.8 9.6-12.6 17.3L16 29.3z"/>
                  </svg>
                    :
                    <i 
                    onClick={()=>dispatch(handleLikes({postId: _id, token}))}
                    class="uil uil-heart"></i>            
                  }
                </span>
                  <span><i class="uil uil-comment-dots"></i></span>
                  <span><i class="uil uil-share-alt"></i></span>
                </div>
                <div className="bookmark">
                    {
                      bookmarkPosts.find(id => id === _id )?
                      <svg 
                      onClick={()=> dispatch(handleRemovefromBookmarks({postId: _id, token}))}
                      class="uil uil-bookmark-full active" width="1em" height="1em" viewBox="0 0 32 32">
                      <path d="M6 2h20c1.1 0 2 .9 2 2v26l-12-6-12 6V4c0-1.1.9-2 2-2z"/>
                    </svg> 
                    :                 
                    <i 
                    onClick={()=> dispatch(handleAddtoBookmarks({postId: _id, token}))}
                    class="uil uil-bookmark-full "></i> 
                    }                   
                </div>
              </div>
              <div className="liked-by">  
              {
                !likedBy.length ? "" :
                (
                  <>
                     {
                        likedBy.slice(1).map(like =>
                         (
                          <span>
                          <img src={like?.avatarURL} alt={like?.avatarURL} />
                          </span>
                         ))
                       }
                         {!likedBy.length ? " " :  <p>Liked by
                       {
                        likedBy.slice(2).map(like =>
                          (
                           <b>{like?.username},</b> 
                          ))
                       }
                     and others
                       </p>                      
                       }                      
                    </>
                )
              }                          
              </div>
              <div className="caption">
                    <p><b>{firstName} {lastName}</b>
                   {content}
                    <p className="hash-tag">{hashtags}</p> 
                    </p>
                </div>
        {showModal && <Modal modalBody={<EditPost 
        post={post} setShowModal={setShowModal} 
        />} setShowModal={setShowModal}
        edit={isEdit}
        />}  

            </div>
  )
}

export default PostCard