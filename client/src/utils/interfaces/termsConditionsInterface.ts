import React from "react";

export default interface termsConditionsInterface {
    modalHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    modalIsOpen: boolean,
    closeModal: () => void
}