import React, { useEffect, useRef } from "react";
import termsConditionsInterface from "../utils/interfaces/termsConditionsInterface";
import "../styles/TermsConditions.css";

function TermsConditionsComponent(prop: termsConditionsInterface) {

    const modalRef = useRef<any>(null);

    useEffect(() => {
        const handleEvent = (e:any) => {
            if((!modalRef.current.contains(e.target)) && prop.modalIsOpen) {
                prop.closeModal();
            }
        }

        document.addEventListener("mousedown", handleEvent);

        return() => {document.removeEventListener("mousedown", handleEvent)};
    })
    
    return(
        <aside className={`terms-modal ${prop.modalIsOpen?"active":""}`} ref={modalRef}>
            <div className="terms-modal-header">
                <h1 className="terms-modal-title">Terms and Conditions</h1>
                <button className="terms-modal-clse-btn" onClick={prop.modalHandler}>&times;</button>
            </div>
            <div className="terms-modal-body">
                terms and conditions...
            </div>
        </aside>
    );
}

export default TermsConditionsComponent;