import React from "react";
import inputPropInterface from "../utils/interfaces/inputPropInterface";
import "../styles/InputComponent.css";

function InputComponent(prop: inputPropInterface) {
    return(
        <div className={`inputField ${prop.value !==""?"field_not_empty":""}`}>
            <div className="fieldLabel">
                <label htmlFor={prop.type}>
                    {prop.placeholder.toLowerCase()}
                </label>
                <span className="err">
                    {prop.errorMessage}
                </span>
            </div>
            <input required={prop.requried} className="fieldInput" placeholder={prop.placeholder}
            type={prop.type} value={prop.value} onChange={prop.onChangeHandler}></input>
        </div>
    );
}

export default InputComponent;