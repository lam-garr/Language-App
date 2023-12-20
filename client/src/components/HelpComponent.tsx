import React from "react";
import helpComponentPropInterface from "../utils/interfaces/helpComponentPropInterface";
import "../styles/HelpComponent.css";

function HelpComponent(prop: helpComponentPropInterface) {
    return(
        <aside className={`help-component ${prop.helpComponentIsOpen?"active":""}`}>
            <div className="help-component-header">
                <div></div>
                <h1 className="help-component-title">!</h1>
                <button className="help-component-close-btn" onClick={prop.helpComponentHandler}>&times;</button>
            </div>
            <div className="help-component-body">
                {prop.helpMessage}
            </div>
        </aside>
    );
}

export default HelpComponent;