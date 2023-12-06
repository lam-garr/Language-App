import React from "react";
import "../styles/NavComponent.css";

function NavComponent() {
    return(
        <nav className="nav-content">
            <div className="nav-container">
                <div className="nav-left">
                    <div className="nav-left-logo">
                        <h1>Logo</h1>
                    </div>
                    <div className="nav-left-content">
                        <h2>home</h2>
                        <h2>my level</h2>
                        <h2>my courses</h2>
                    </div>
                </div>
                <div className="nav-right">
                    account
                </div>
            </div>
            <div className="nav-container-mobile">
                <div className="nav-mobile-left">
                    <button className="nav-mobile-menu-btn">
                        <div className="nav-mobile-menu-div"></div>
                        <div className="nav-mobile-menu-div"></div>
                        <div className="nav-mobile-menu-div"></div>
                    </button>
                </div>
                <div className="nav-mobile-middle">
                    <div>
                        middle content
                    </div>
                </div>
                <div className="nav-mobile-right">
                    <div>
                        right content
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavComponent;