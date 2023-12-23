import React from "react";

export default interface helpComponentPropInterface {
    helpComponentHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    helpComponentIsOpen: boolean,
    closeHelpComponent: () => void,
    helpMessageId: number;
}