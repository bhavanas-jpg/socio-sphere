import React, { useState } from 'react';
import "./form.css";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../utils/constants';
import { handleUserUpdate } from '../../pages/Auth/authSlice';
import { handleEditUser } from '../../pages/Home/usersSlice';


const EditProfile = ({currentUser , setShowModal}) => {

    const {user, token} = useSelector(store => store.auth);
    const {allUsers} = useSelector(store=>store.users);
    const dispatch = useDispatch();

 const [formValues, setFormValues] = useState(currentUser);
 const{avatarURL, bio, website } = formValues;

 console.log(currentUser , "edit form")
 console.log(user, "edited User");


 const handleSubmit =(e, values)=>{
    console.log(values ,"after save button");
    e.preventDefault();
    dispatch(handleEditUser({userData: values, token}))
    setShowModal(false);
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
                onChange={e => setFormValues({...formValues, avatarURL: e.target.value})}
                accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
                type="file" 
                style={{opacity:"0"}}
                />
            </label>
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