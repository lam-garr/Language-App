import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function AuthedPage() {

    const [ validated, setValidated ] = useState(false);

    return validated ? <Navigate to="/:username"/> : <Outlet/>;
}

export default AuthedPage;