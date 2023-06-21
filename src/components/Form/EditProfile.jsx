import React, { useState } from 'react';
import "./form.css";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../utils/constants';
import { handleUserUpdate } from '../../pages/Auth/authSlice';
import { handleEditUser } from '../../pages/Home/usersSlice';
import { handleEditUserPost } from '../Posts/postsSlice';





const EditProfile = ({currentUser , setShowModal}) => {
   const avtr1 = "/assets/avatar-1.jpg";
   const avtr2 = "/assets/avatar-2.jpg";
   const avtr3 = "/assets/avatar-3.jpg";
   const avtr4 = "/assets/avatar-5.webp";

   const avatars = [avtr1,avtr2,avtr3, avtr4]
    const {user, token} = useSelector(store => store.auth);
    const {allUsers} = useSelector(store=>store.users);
    const dispatch = useDispatch();

 const [formValues, setFormValues] = useState(currentUser);
 const{avatarURL, bio, website } = formValues;

 console.log(formValues);


 const changePictureHandler =(e) =>{
    const file = e.target.files[0];
    if(file?.type.startsWith("image/")){
        if(file.size < 10 * 1024 * 1024){
            setFormValues((prev)=>({
                ...prev,
                avatarURL: URL.createObjectURL(file)
            }));
        }else{
            alert("file must be less than 10mb");
        }
    }else{
        alert("file must be an image (JPEG/PNG)");
    }
 }

 const handleSubmit =(e, values)=>{
    console.log(values ,"after save button");
    e.preventDefault();
    dispatch(handleEditUser({userData: values, token }));
    dispatch(handleEditUserPost({userData: values, token}));
    setShowModal(false);
 }

 const handleImageClick = (event) =>
 {
    const src = event.target.src;
    setFormValues({...formValues, avatarURL:src})  
 }



  return (
    <div>
        <form className="edit-form" onSubmit={(e)=>handleSubmit(e ,formValues)}>
            <label>
                Photo 
                <img className="profile-picture" 
                src={avatarURL}              
                />
                <input 
                onChange={changePictureHandler}
                type="file" 
                style={{opacity:"0"}}
                />
            </label>
            <div style={{display:"flex"}}>
            {avatars.map(avatar =>
                <img    
                className="profile-picture" 
                src={avatar} alt="avatar_image"
                onClick={handleImageClick} />
            )}
            </div>
            <label>
                Bio
            <input 
            type="text"
            value={bio}
            onChange={e => setFormValues({...formValues, bio:e.target.value})} />
            </label>
            <label>
                Website 
            <input 
            onChange={e => setFormValues({...formValues, website: e.target.value})}
            type="text" 
            value={website}/>
            </label> 
            
          
            <button type="submit">Save</button>         
        </form>
    </div>
  )
}

export default EditProfile