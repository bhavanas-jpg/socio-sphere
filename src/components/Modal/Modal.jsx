import React from 'react';
import "./modal.css"
import "../Form/form.css"

const Modal = ({modalBody, setShowModal,  edit}) => {
  return (
    <div className="overlay">
        <div className="modal">
            <div className="modal-close">
            <i 
            onClick={()=>setShowModal(false)}
            class="uil uil-times"></i>
            </div>

            <div className={edit ? "modal-body edit-post" : "modal-body"}>
                {modalBody}
            </div>
        </div>
    </div>
  )
}

export default Modal