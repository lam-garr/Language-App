import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function AuthedPage() {

    const [ validated, setValidated ] = useState(false);

    const [ fetching, setFetching ] = useState(true);

    useEffect(() => {
        const validate = async () => {
            const data = window.localStorage.getItem("AccessToken");

            let dataToken;

            if(data) {
                dataToken = JSON.parse(data);
            }

            //wip
            const response = await fetch("/api/", {
                method:"GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${dataToken}`
                }
            });

            const resObj = await response.json();

            if(resObj) {
                setValidated(true);
                setFetching(false);
            } else {
                setFetching(false);
            }
        }

        validate();
    }, [])

    if(fetching) {
        return null;
    }

    return validated ? <Navigate to="/:username"/> : <Outlet/>;
}

export default AuthedPage;