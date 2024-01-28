import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import "../styles/LoginPage.css";

function LoginPage() {

    const navigate = useNavigate();

    const [ loginInput, setLoginInput ] = useState("");

    const handleLoginChange = (e:any) => {
        setLoginInput(e.target.value);
    }

    const [ passwordInput, setPasswordInput ] = useState("");

    const handlePasswordChange = (e:any) => {
        setPasswordInput(e.target.value);
    }

    const [ loginErrMessage, setLoginErrMessage ] = useState("");

    const handleLoginErr = (message: string) => {
        setLoginErrMessage(message);
    }

    const [ passwordErrMessage, setPasswordErrMessage ] = useState("");

    const handlePasswordErr = (message: string) => {
        setPasswordErrMessage(message);
    }

    const [ apiErr , setApiErr ] = useState(false);

    const [ fetching, setFetching ] = useState(false);

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        //check if input is valid
        if(loginInput.length <= 1) {
            handleLoginErr("username invalid");
            return;
        }

        setLoginErrMessage("");

        //check if password id valid
        if(passwordInput.length <= 1) {
            handlePasswordErr("password invalid");
            return;
        }

        setPasswordErrMessage("");

        setFetching(true);

        //call login api
        const loginData = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: loginInput, password: passwordInput})
        });

        const apiDataObj = await loginData.json();

        console.log(loginInput)
        console.log(passwordInput)

        console.log(apiDataObj);

        if(!apiDataObj) {
            setLoginInput("");
            setPasswordInput("");
            setApiErr(true);
            setFetching(false);
        }else {
            setApiErr(false);
            //set return token from api to localStorage
            window.localStorage.setItem("AccessToken", JSON.stringify(apiDataObj.accessToken));
            setFetching(false);
            navigate(`/${loginInput}`);
        }
    }

    const handleLoading = () => {
        if(fetching) {
            return "Loading";
        } else {
            return "Log In";
        }
    }

    return(
        <main>
            <div className="log-in-content">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <InputComponent onChangeHandler={handleLoginChange} value={loginInput} type="text"
                     placeholder="Username" errorMessage={loginErrMessage} requried={true}/>
                    <InputComponent onChangeHandler={handlePasswordChange} value={passwordInput} type="password"
                     placeholder="Password" errorMessage={passwordErrMessage} requried={true}/>
                    <div className="log-in-submit">
                        {apiErr && <span className="log-in-err">Error logging in, please try again.</span>}
                        <button className="log-in-submitBtn" type="submit" disabled={fetching}>{handleLoading()}</button>
                    </div>
                </form>
                <div className="log-in-members">
                    Not a member? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </main>
    )
}

export default LoginPage;