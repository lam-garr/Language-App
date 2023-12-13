import React, { useState, useEffect, useRef } from "react";
import sidebarComponentPropInterface from "../utils/interfaces/sidebarComponentPropInterface";
import "../styles/SidebarComponent.css";
import { Link } from "react-router-dom";

function SidebarComponent(prop: sidebarComponentPropInterface) {

    const sidebarRef = useRef<any>(null);

    useEffect(() => {
        const handleEvent = (e:any) => {
            if((!sidebarRef.current.contains(e.target)) && prop.sidebarIsOpen) {
                prop.closeHandler();
            }
        };

        document.addEventListener("mousedown", handleEvent);

        return() => {
            document.removeEventListener("mousedown", handleEvent);
        }
    })

    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    const signOut = () => {
        setIsLoggedIn(false);
        prop.closeHandler();
    }

    return(
        <aside className={`sidebar ${prop.sidebarIsOpen?"active":"inactive"}`} ref={sidebarRef}>
            <div className="sidebar-header">
                <div></div>
                <button className="sidebar-close-btn" onClick={prop.clickHandler}>&times;</button>
            </div>
            <Link to={"/"}><button onClick={prop.closeHandler}>Home</button></Link>
            <Link to={"/"}><button onClick={prop.closeHandler}>Account</button></Link>
            {isLoggedIn ? (<Link to={"/"}><button onClick={signOut}>Sign Out</button></Link>)
                : (<Link to={"/login"}><button onClick={prop.closeHandler}>Log In</button></Link>)}
        </aside>
    );
}

export default SidebarComponent;