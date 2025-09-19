import {React} from 'react'

function Modal(
    {   
        //logic :
        closeModal,
        //content : 
        modalTitle, 
        modalContent, 
        //style :
        backgroundColor, 
        modalBackgroundColor,
        modalPadding,
        iconPositionY,
        iconPositionX,
    }) {
    return (
        <div 
            className="modalBackground"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: backgroundColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div className="modal"
                 style={{
                        background: modalBackgroundColor,
                        padding: modalPadding,
                        borderRadius: "10px",
                        boxShadow: "0px 4px 10px rgba(0,0,0,1)",
                    }}
            >
                <h3 className="modalTitle">
                    {modalTitle}
                </h3>
                <p
                    className="modalContent"
                    style={{
                    }}
                >{modalContent}</p>

                <i 
                    className="fa-solid fa-xmark" 
                    onClick={closeModal}
                    style={{
                        position: "absolute",
                        top: iconPositionY,
                        left: iconPositionX,
                        color: "white",
                        background: "black",
                        padding: "0.3% 0.4%",
                        borderRadius: "100%",
                    }}
                ></i>
            </div>
        </div>
    )
}

export default Modal