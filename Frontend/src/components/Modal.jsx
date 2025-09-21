import {React} from 'react'

function Modal(
    {   
        //logic :
        closeModal,
        //content : 
        modalTitle, 
        modalContent, 
        //style :
        modalBackgroundClass, 
        modalClass,
        modalTitleClass,
        modalContentClass,
        iconClass,
    }) {
    return (
        <div className={modalBackgroundClass}>
            <div className={modalClass}>
                <h3 className={modalTitleClass}> {modalTitle} </h3>
                <p className={modalContentClass}>{modalContent}</p>
                <i className={`fa-solid fa-xmark ${iconClass}`} onClick={closeModal}></i>
            </div>
        </div>
    )
}

export default Modal