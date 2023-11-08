import React from "react";

export default interface inputPropInterface {
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    type: string,
    placeholder: string,
    errorMessage: string,
    requried: boolean;
}