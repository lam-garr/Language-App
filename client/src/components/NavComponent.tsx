import React from "react";
import { Link } from "react-router-dom";
import navComponentPropInterface from "../utils/interfaces/navComponentPropInterface";
import "../styles/NavComponent.css";

function NavComponent(prop: navComponentPropInterface) {
    return(
        <nav className="nav-content">
            <div className="nav-container">
                <div className="nav-left">
                    <div className="nav-left-logo">
                        <h1>LingoLearn</h1>
                    </div>
                    <div className="nav-left-content">
                        <Link to={"/"}><button><h2>home</h2></button></Link>
                        <Link to={"/lessons"}><button><h2>my lessons</h2></button></Link>
                        <Link to={"/courses"}><button><h2>my courses</h2></button></Link>
                    </div>
                </div>
                <div className="nav-right">
                    <Link to={"/user"}><button><h2>account</h2></button></Link>
                </div>
            </div>
            <div className="nav-container-mobile">
                <div className="nav-mobile-left">
                    <button className="nav-mobile-menu-btn" onClick={prop.sidebarHandler}>
                        <div className="nav-mobile-menu-div"></div>
                        <div className="nav-mobile-menu-div"></div>
                        <div className="nav-mobile-menu-div"></div>
                    </button>
                </div>
                <div className="nav-mobile-middle">
                    <div>
                        <Link to={"/"}><button><h1>LingoLearn</h1></button></Link>
                    </div>
                </div>
                <div className="nav-mobile-right">
                    <div>
                        <Link to={"/user"}><button><h2>account</h2></button></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavComponent;