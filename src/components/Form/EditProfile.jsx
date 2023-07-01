import React, { useState } from 'react';
import "./form.css";
import { useDispatch, useSelector } from 'react-redux';
import { handleEditUser } from '../../pages/Home/usersSlice';


const EditProfile = ({ currentUser, setShowModal }) => {
    const avtr1 = "/assets/avatar-1.jpg";
    const avtr2 = "/assets/avatar-2.jpg";
    const avtr3 = "/assets/avatar-3.jpg";
    const avtr4 = "/assets/avatar-5.webp";

    const avatars = [avtr1, avtr2, avtr3, avtr4]
    const { user, token } = useSelector(store => store.auth);
    const { allUsers } = useSelector(store => store.users);
    const dispatch = useDispatch();

    const [formValues, setFormValues] = useState(currentUser);
    const { avatarURL, bio, website } = formValues;

    const changePictureHandler = (e) => {
        const file = e.target.files[0];
        if (file?.type.startsWith("image/")) {
            if (file.size < 10 * 1024 * 1024) {
                setFormValues((prev) => ({
                    ...prev,
                    avatarURL: URL.createObjectURL(file)
                }));
            } else {
                alert("file must be less than 10mb");
            }
        } else {
            alert("file must be an image (JPEG/PNG)");
        }
    }

    const handleSubmit = (e, values) => {
    
        e.preventDefault();
        dispatch(handleEditUser({ userData: values, token }));
        // dispatch(handleEditUserPost({ userData: values, token }));
        setShowModal(false);
    }

    const handleImageClick = (event) => {
        const src = event.target.src;
        setFormValues({ ...formValues, avatarURL: src })
    }

    return (
        <div>
            <form className="edit-form" onSubmit={(e) => handleSubmit(e, formValues)}>
                <div className="avatar-container">
                <label>
                    Photo
                    <img className="profile-picture edit__image"
                        src={avatarURL}
                    />
                    <input
                        onChange={changePictureHandler}
                        type="file"
                        className="add__image"
                    />
                     <i className="uil uil-image"></i>
                </label>
                <label className="avatar__title">choose any avatar
                <div className="avatars">
                    {avatars.map(avatar =>
                        <img
                            className="profile-picture"
                            src={avatar} alt="avatar_image"
                            onClick={handleImageClick} />
                    )}
                </div>
                </label>
                </div>
                <label>
                    Bio
                    <input
                        type="text"
                        value={bio}
                        onChange={e => setFormValues({ ...formValues, bio: e.target.value })} />
                </label>
                <label>
                    Website
                    <input
                        onChange={e => setFormValues({ ...formValues, website: e.target.value })}
                        type="text"
                        value={website} />
                </label>

                <div className="btn__container">
                <button 
                 onClick={()=>setShowModal(false)}
                className="btn discard-btn">Discard</button>
                <button 
                className='btn btn-primary'
                type="submit">Save</button>
                </div>
                
            </form>
        </div>
    )
}

export default EditProfile