import React, { useEffect, useRef } from "react";
import helpComponentPropInterface from "../utils/interfaces/helpComponentPropInterface";
import "../styles/HelpComponent.css";

function HelpComponent(prop: helpComponentPropInterface) {

    const modalRef = useRef<any>(null);

    useEffect(() => {
        const handleEvent = (e:any) => {
            if((!modalRef.current.contains(e.target)) && prop.helpComponentIsOpen) {
                prop.closeHelpComponent();
            }
        }

        document.addEventListener("mousedown", handleEvent);

        return() => {
            document.removeEventListener("mousedown", handleEvent);
        }
    })

    const getMessage = () => {
        if(prop.helpMessageId === 1) {
            return "";
        }

        if(prop.helpMessageId === 2) {
            return "";
        }

        return "";
    }

    return(
        <aside className={`help-component ${prop.helpComponentIsOpen?"active":""}`} ref={modalRef}>
            <div className="help-component-header">
                <div></div>
                <h1 className="help-component-title">!</h1>
                <button className="help-component-close-btn" onClick={prop.helpComponentHandler}>&times;</button>
            </div>
            <div className="help-component-body">
                <span>{getMessage()}</span>
            </div>
        </aside>
    );
}

export default HelpComponent;