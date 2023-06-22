import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleEditUserPost } from '../Posts/postsSlice';
import "./form.css";

const EditPost = ({ post, setShowModal }) => {


    const { user, token } = useSelector(store => store.auth);
    const { allUsers } = useSelector(store => store.users);
    const [formValues, setFormValues] = useState(post);
    const { _id, content, hashtags, mediaURL } = formValues;
    const currentUser = allUsers.find((user) => user.username === post?.username);
    const dispatch = useDispatch();

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


    const handleSubmit = (e, values) => {
        e.preventDefault();
        dispatch(handleEditUserPost({ postId: _id, post: values, token }));
        setShowModal(false)

    }

    return (
        <main>
            <form onSubmit={(e) => handleSubmit(e, formValues)}>
                <div className="user__info">
                    <img className="profile-picture"
                        src={currentUser?.avatarURL} alt="user-image" />
                    <span className="text-muted">{post?.username}</span>
                </div>
                <textarea
                    value={content}
                    onChange={e => setFormValues({ ...formValues, content: e.target.value })}
                    cols="30" rows="4">
                </textarea>
                <textarea
                    value={hashtags}
                    onChange={e => setFormValues({ ...formValues, hashtags: e.target.value })}
                    cols="30" rows="4"
                    className="hash-tag">
                </textarea>
                <label>
                    <img src={mediaURL} alt="post-image"
                        className="edit__post--image "
                    />
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
                        type="submit">Save</button>
                </div>

            </form>
        </main>
    )
}

export default EditPost