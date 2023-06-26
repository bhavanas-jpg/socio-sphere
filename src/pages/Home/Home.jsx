import React, { useState } from 'react'
import Posts from '../../components/Posts/Posts';
import { MdMood } from 'react-icons/md';
import EmojiPicker from 'emoji-picker-react';
import { useDispatch, useSelector } from 'react-redux';
import "./home.css"
import { handleCreatePost, setFilterPost } from '../../components/Posts/postsSlice';
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import SuggestedUser from '../../components/SuggestedUser/SuggestedUser';


const Home = () => {

  const { user, token } = useSelector(store => store.auth);
  const { allPosts, filterPost } = useSelector(store => store.posts);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [postValues, setPostValues] = useState({
    content: "",
    mediaURL: "",
    avatarURL: user?.avatarURL,
    firstName: user?.firstName,
    lastName: user?.lastName
  });
  const [showFilter, setShowFilter] = useState(false);
  const dispatch = useDispatch();
  const sortTypes = ["Oldest", "Latest", "Trending"];

  const homePosts = allPosts.filter((post) =>
    post.username === user.username ||
    user?.following?.some(
      (following) => following.username === post.username)
  )

  const resetForm = () => {
    setPostValues(prev => ({ ...prev, content: "", mediaURL: "" }))
  }

  const sortedPosts = (filterType, homePosts) => {
    if (filterType === "Latest") {
      const sortedPosts = homePosts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return sortedPosts;
    }
    if (filterType === "Oldest") {
      const sortedPosts = homePosts.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      )
      return sortedPosts;
    } else {
      const sortedPosts = homePosts.sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      );
      return sortedPosts;
    }
  }


  const handleEmojiClick = (emojiObj) => {
    console.log("emoji");
    const emoji = emojiObj.emoji;
    setPostValues({ ...postValues, content: postValues.content + emoji });
    setShowEmojiPicker(false);
  }

  const changePictureHandler = (e) => {
    const file = e.target.files[0];
    if (file?.type.startsWith("image/")) {
      if (file.size < 10 * 1024 * 1024) {
        setPostValues((prev) => ({
          ...prev,
          mediaURL: URL.createObjectURL(file)
        }));
      } else {
        alert("file must be less than 10mb");
      }
    } else {
      alert("file must be an image (JPEG/PNG)");
    }
  }

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div>
            <Navbar />
          </div>

          <div>
            <div className="create__post--container">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(handleCreatePost({ post: postValues, token }))
                resetForm();
              }}
            >
               <div className="create__post">
              <div className='profile-picture'>
                <img src={user?.avatarURL} alt={user?.username} />
              </div>

           
              <textarea
                className="post__input"
                onChange={(e) => setPostValues({ ...postValues, content: e.target.value })}
                cols="30" rows="4"
                maxLength={100}
                value={postValues.content}
                placeholder="What's on your mind" >
              </textarea> 

                      
              <div className="create__post--icons">               
                    <label>
                      <input type="file"
                        className="add__image"
                        onChange={changePictureHandler}
                      />
                      <i className="uil uil-image img__icon ">
                      </i>
                    </label>
                    <MdMood
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      className="smile__icon" />
                    {showEmojiPicker &&
                      <div className='emoji--container'>
                        <EmojiPicker
                          onEmojiClick={handleEmojiClick}
                          height="25rem"
                          width="20rem"

                        />
                      </div>
                    }         
              </div>              
              </div>
              {
                    postValues.mediaURL &&
                    <div className="post__image__container">
                        <img src={postValues.mediaURL} alt="post-image"
                            className="create__post--image "
                        />
                        <i
                            onClick={() => setPostValues({ ...postValues, mediaURL: "" })}
                            className='uil uil-times close__post--image'></i>
                    </div>
                }
              <div className="post__button">
              <button
                type="submit"
                disabled={!postValues.content.length}
                className="btn btn-primary" >Post</button>
              </div>
            

            </form>
            </div>

            <div className="filter__container">
              <div
                onClick={() => setShowFilter(!showFilter)}
                className="filter__header">
                <h3>{filterPost} Posts</h3>
                <TbAdjustmentsHorizontal
                  className="filter__icon"
                />
              </div>
              {
                showFilter &&
                <ul className="filter-lists">
                  {
                    sortTypes.map((type) => (
                      <li
                        key={type}
                        className={type === filterPost ? "isActive" : ""}
                        onClick={() => {
                          dispatch(setFilterPost(type));
                          setShowFilter(false)
                        }}
                      >{type}</li>
                    ))
                  }
                </ul>
              }

            </div>
            <Posts posts={sortedPosts(filterPost, homePosts)} />
          </div>
          <div>
            <SuggestedUser />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home