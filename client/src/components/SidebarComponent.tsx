import React from "react";
import sidebarComponentPropInterface from "../utils/interfaces/sidebarComponentPropInterface";
import "../styles/SidebarComponent.css";
import { Link } from "react-router-dom";

function SidebarComponent(prop: sidebarComponentPropInterface) {
    return(
        <aside className={`sidebar ${prop.sidebarIsOpen?"active":"inactive"}`}>
            <div className="sidebar-header">
                <div></div>
                <button className="sidebar-close-btn" onClick={prop.clickHandler}>&times;</button>
            </div>
            <Link to={"/"}><button onClick={prop.closeHandler}>Home</button></Link>
            <Link to={"/"}><button onClick={prop.closeHandler}>Account</button></Link>
        </aside>
    );
}

export default SidebarComponent;