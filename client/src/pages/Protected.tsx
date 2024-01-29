import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected() {

    const [ validated, setValidated ] = useState(false);

    const [ validating, setValidating ] = useState(true);

    useEffect(() => {
        if(window.localStorage.getItem("AccessToken")) {
            setValidated(true);
            setValidating(false);
        } else {
            setValidating(false);
        }
    }, [])

    if(validating) return null;

    return validated ? <Outlet/> : <Navigate to="/login"/>;
}

export default Protected;