import React from "react";
import overlayPropInterface from "../utils/interfaces/overlayPropInterface";
import "../styles/OverlayComponent.css";

function OverlayComponent(prop: overlayPropInterface) {
    return(
        <div className={`overlay ${prop.isOpen?"active":""}`}></div>
    );
}

export default OverlayComponent;
