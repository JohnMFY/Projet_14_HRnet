import {React} from 'react'

function Modal({closeModal, modalTitle, modalContent}) {
    return (
        <div 
            className="modal"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <h3 className="modalTitle">
                {modalTitle}
            </h3>
            <p
                className="modalContent"
                style={{
                    background: "white",
                    padding: "0.5% 10% 0.5% 1%",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,1)",
                }}
            >{modalContent}</p>

            <i 
                className="fa-solid fa-xmark" 
                onClick={closeModal}
                style={{
                    position: "absolute",
                    top: "47vh",
                    left: "121vh",
                    color: "white",
                    background: "black",
                    padding: "0.3% 0.4%",
                    borderRadius: "100%",
                }}
            ></i>
        </div>
    )
}

export default Modal