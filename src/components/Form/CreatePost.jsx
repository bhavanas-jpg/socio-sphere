import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleCreatePost } from '../Posts/postsSlice';

const CreatePost = ({setShowModal}) => {
    const {user, token} = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState({
        content: "",
        hashtags: "",
        mediaURL:"",
        avatarURL: user?.avatarURL,
        firstName: user?.firstName,
        lastName: user?.lastName
      });  

      const resetForm =()=>{
        setFormValues(prev=> ({...prev,content:"", hashtags:"",mediaURL:"" }))
       }
      
    const handleSubmit = (e, values) => {
        e.preventDefault();
        dispatch(handleCreatePost({post:values, token}))
        resetForm();
        setShowModal(false)
    }



    const changeMediaHandler = (e) => {
        const file = e.target.files[0];
        if (file?.type.startsWith("image/")) {
            if (file.size < 10 * 1024 * 1024) {
                setFormValues((prev) => ({
                    ...prev,
                    mediaURL: URL.createObjectURL(file)
                }))
            } else {
                alert("file must be less than 10mb")
            }
        } else {
            alert("file must be an image (JPEG/PNG)");
        }
    }

  return (
    <main>
        <form onSubmit={(e) => handleSubmit(e, formValues)}>
                <div className="user__info">
                    <img className="profile-picture"
                        src={user?.avatarURL} alt="user-image" />
                    <span className="text-muted">{user?.username}</span>
                </div>
                <textarea
                    value={formValues.content}
                    placeholder="what's on your mind?"
                    onChange={e => setFormValues({ ...formValues, content: e.target.value })}
                    cols="30" rows="4">
                </textarea>
                <textarea
                    value={formValues.hashtags}
                    placeholder="#hashtags"
                    onChange={e => setFormValues({ ...formValues, hashtags: e.target.value })}
                    cols="30" rows="4"
                    className="hash-tag">
                </textarea>
                <label>
                    {
                        formValues.mediaURL && 
                        <img src={formValues.mediaURL} alt="post-image"
                        className="edit__post--image "
                    />
                    }
                    
                    <input type="file"
                        className="add__image"
                        onChange={changeMediaHandler}
                    />
                    <i className="uil uil-image edit__post">
                    </i>
                </label>
                <div className="btn__container">
                    <button
                        onClick={() => setShowModal(false)}
                        className="btn discard-btn">Discard</button>
                    <button
                        className='btn btn-primary'
                        type="submit">Post</button>
                </div>
            </form>
        </main>
  )
}

export default CreatePost