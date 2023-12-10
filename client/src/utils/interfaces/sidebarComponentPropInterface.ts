import React from "react";

export default interface sidebarComponentPropInterface {
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    closeHandler: () => void,
    sidebarIsOpen: boolean;
}