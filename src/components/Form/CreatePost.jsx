import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleCreatePost } from '../Posts/postsSlice';
import { MdMood } from 'react-icons/md';
import EmojiPicker from 'emoji-picker-react';

const CreatePost = ({ setShowModal }) => {
    const { user, token } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [formValues, setFormValues] = useState({
        content: "",
        hashtags: "",
        mediaURL: "",
        avatarURL: user?.avatarURL,
        firstName: user?.firstName,
        lastName: user?.lastName
    });

  

    const resetForm = () => {
        setFormValues(prev => ({ ...prev, content: "", hashtags: "", mediaURL: "" }))
    }

    const handleSubmit = (e, values) => {
        e.preventDefault();
        dispatch(handleCreatePost({ post: values, token }))
        resetForm();
        setShowModal(false)
    }

    const handleEmojiClick = (emojiObj) => {
   
        const emoji = emojiObj.emoji;
        setFormValues({ ...formValues, content: formValues.content + emoji });
        setShowEmojiPicker(false);
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
                    <div><img className="profile-picture"
                        src={user?.avatarURL} alt="user-image" /></div>
                    <div>
                        <p>{user?.firstName} {user?.lastName}</p>
                        <p className="text-muted post__username">@{user?.username}</p>
                    </div>

                </div>
                <textarea
                    value={formValues.content}
                    placeholder="what's on your mind?"
                    onChange={e => {
                        setFormValues({ ...formValues, content: e.target.value })
                        setIsDisabled(false)
                    }
                    }
                    cols="30" rows="4"
                    maxLength={100}
                >
                </textarea>
                <MdMood
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className="smiley__icon" />
                {showEmojiPicker &&
                    <div className='emoji__container'>
                        <EmojiPicker
                            onEmojiClick={handleEmojiClick}
                            height="25rem"
                            width="20rem"

                        />
                    </div>
                }

                <textarea
                    value={formValues.hashtags}
                    placeholder="#hashtags"
                    onChange={e => setFormValues({ ...formValues, hashtags: e.target.value })}
                    cols="30" rows="4"
                    maxLength={100}
                    className="hash-tag">
                </textarea>
                {
                    formValues.mediaURL &&
                    <div className="post__image__container">
                        <img src={formValues.mediaURL} alt="post-image"
                            className="edit__post--image "
                        />
                        <i
                            onClick={() => setFormValues({ ...formValues, mediaURL: "" })}
                            className='uil uil-times close__image'></i>
                    </div>
                }
                <label>
                    <input type="file"
                        className="add__image"
                        onChange={changeMediaHandler}
                    />
                    <i className="uil uil-image edit__post">
                    </i>
                </label>


                <div className={`btn__container ${formValues.mediaURL ? '' : 'mt-7'}`}>
                    <button
                        onClick={() => setShowModal(false)}
                        className="btn discard-btn">Discard</button>
                    <button
                        disabled={!formValues.content.length}
                        className='btn btn-primary post__btn'
                        type="submit">Post</button>
                </div>
            </form>
        </main>
    )
}

export default CreatePost