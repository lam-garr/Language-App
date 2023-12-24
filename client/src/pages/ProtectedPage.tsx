import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedPage() {

    const [ validated, setValidated ] = useState(false);

    return validated ? <Outlet/> : <Navigate to="login"/>;
}

export default ProtectedPage;