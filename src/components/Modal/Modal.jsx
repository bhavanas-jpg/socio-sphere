import React from 'react';
import "./modal.css"

const Modal = ({modalBody, setShowModal}) => {
  return (
    <div className="overlay">
        <div className="modal">
            <div className="modal-close">
            <i 
            onClick={()=>setShowModal(false)}
            class="uil uil-times"></i>
            </div>
            <div className="modal-body">
                {modalBody}
            </div>
        </div>
    </div>
  )
}

export default Modal