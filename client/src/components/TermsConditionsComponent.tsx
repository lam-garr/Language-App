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
        <aside ref={modalRef}></aside>
    );
}

export default TermsConditionsComponent;