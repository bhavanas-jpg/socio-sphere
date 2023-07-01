import React, { useState } from 'react';
import "./header.css"
import "../../index.css"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CreatePost from '../Form/CreatePost';
import Modal from '../Modal/Modal';

const Header = () => {
    const {user} = useSelector(store=>store.auth);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const {allUsers} = useSelector(store => store.users);
    const isEdit = true;
    const logo = "/assets/logo-image.gif";
    const userImg = allUsers?.find(({ username })=> username === user?.username );
    
  return (
    <>
    <header>
        <nav>
            <div className="container">
              <div className="logo__container"
              onClick={()=>navigate("/")}
              >
              <img src={logo}
                  className="logo__image"
                  alt="logo-image" />
                  <h3 className="logo">SocioSphere</h3>
              </div>
                <div className="create">
         <button className="btn btn-primary"
          for="create-post"
          onClick={()=>setShowModal(true)}
          >Create</button>

         <div className="profile-picture header__profile"
         onClick={()=>navigate(`/profile/${user?.username}`)}
         >
            <img src={userImg?.avatarURL} alt="profile-picture" />
         </div>
         </div>
            </div>
        </nav>
    </header>
    {showModal && <Modal modalBody={<CreatePost
     setShowModal={setShowModal} 
      />} 
      setShowModal={setShowModal}
      edit={isEdit}
      /> }
    </>
  )
}

export default Header