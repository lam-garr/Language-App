import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import "../styles/SignupPage.css";

function SignupPage() {

    const navigate = useNavigate();

    const [ usernameInput, setUsernameInput ] = useState("");

    const handleUsernameChange = (e:any) => {
        setUsernameInput(e.target.value);
    }

    const [ firstNameInput, setFirstNameInput ] = useState("");

    const handleFirstNameChange = (e:any) => {
        setFirstNameInput(e.target.value);
    }

    const [ lastNameInput, setLastNameInput ] = useState("");

    const handleLastNameChange = (e:any) => {
        setLastNameInput(e.target.value);
    }

    const [ passwordInput, setPasswordInput ] = useState("");

    const handlePasswordChange = (e:any) => {
        setPasswordInput(e.target.value);
    }

    const [ confirmPwInput, setConfirmPwInput ] = useState("");

    const handleConfirmPwChange = (e:any) => {
        setConfirmPwInput(e.target.value);
    }

    const [ checkedTerms, setCheckedTerms ] = useState(false);

    const handleCheckedTermsChange = (e:any) => {
        setCheckedTerms(!checkedTerms);
        setTermsCheckErr(false);
    }

    //errs

    const [ usernameErrMessage, setUsernameErrMessage ] = useState("");

    const handleUsernameErrMessage = (message: string) => {
        setUsernameErrMessage(message);
    }

    const [ firstNameErrMessage, setFirstNameErrMessage ] = useState("");

    const handleFirstNameErrMessage = (message: string) => {
        setFirstNameErrMessage(message);
    }

    const [ lastNameErrMessage, setLastNameErrMessage ] = useState("");

    const handleLastNameErrMessage = (message: string) => {
        setLastNameErrMessage(message);
    }

    const [ passwordErrMessage, setPasswordErrMessage ] = useState("");

    const handlePwErrMessage = (message: string) => {
        setPasswordErrMessage(message);
    }

    const [ confirmPwErrMessage, setConfrimPwErrMessage ] = useState("");

    const hanldeConfirmPwErrMessage = (message: string) => {
        setConfrimPwErrMessage(message);
    }

    const [ termsCheckErr, setTermsCheckErr ] = useState(false);

    const [ signupErr, setSignupErr ] = useState(false);

    const [ fetching, setFetching ] = useState(false);

    const handleFetching = () => {
        if(fetching) {
            return "Loading";
        } else {
            return "Sign Up";
        }
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        if(usernameInput.length <= 3) {
            handleUsernameErrMessage("username not valid");
            return;
        }

        handleUsernameErrMessage("");

        if(firstNameInput.length <= 1) {
            handleFirstNameErrMessage("first name not valid");
            return;
        }

        handleFirstNameErrMessage("");

        if(lastNameInput.length <= 1) {
            handleLastNameErrMessage("last name not valid");
            return;
        }

        handleLastNameErrMessage("");

        if(passwordInput.length <= 5) {
            handlePwErrMessage("password not strong enough");
            return;
        }

        handlePwErrMessage("");

        if(confirmPwInput !== passwordInput) {
            hanldeConfirmPwErrMessage("passwords do not not match");
            return;
        }

        hanldeConfirmPwErrMessage("");

        if(!checkedTerms) {
            setTermsCheckErr(true);
            return;
        }

        setFetching(true);

        const signupData = await fetch("http://localhost:5000/api/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: usernameInput,
                firstname: firstNameInput,
                lastname: lastNameInput,
                password: passwordInput
            })
        });

        if(!signupData.ok) {
            setSignupErr(true);
        } else {
            setSignupErr(false);
            setFetching(false);
            navigate("/login");
        }
    }

    return(
        <main>
            <div className="signup-content">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <InputComponent onChangeHandler={handleUsernameChange} value={usernameInput} type="text"
                    placeholder="Username" errorMessage={usernameErrMessage} requried={true}/>
                    <InputComponent onChangeHandler={handleFirstNameChange} value={firstNameInput} type="text"
                    placeholder="First Name" errorMessage={firstNameErrMessage} requried={true}/>
                    <InputComponent onChangeHandler={handleLastNameChange} value={lastNameInput} type="text"
                    placeholder="Last Name" errorMessage={lastNameErrMessage} requried={true}/>
                    <InputComponent onChangeHandler={handlePasswordChange} value={passwordInput} type="password"
                    placeholder="Password" errorMessage={passwordErrMessage} requried={true}/>
                    <InputComponent onChangeHandler={handleConfirmPwChange} value={confirmPwInput} type="text"
                    placeholder="Re-enter Password" errorMessage={confirmPwErrMessage} requried={true}/>
                    {termsCheckErr && <span>Terms and conditions need to be checked</span>}
                    <div className="submit-terms">
                        <label><input type="checkbox" id="terms-checkbox" onChange={handleCheckedTermsChange}/>
                        I agree to the </label><span className="term-serv-click">terms and condition</span>
                        <span className="term-serv-end">.</span>
                    </div>
                    <div className="sign-up-btn-handler">
                        {signupErr && <span className="sign-up-err">Error signing up, please try agian</span>}
                        <button className="sign-up-btn" type="submit" disabled={fetching}>{handleFetching()}</button>
                    </div>
                </form>
                <div className="signup-members">
                    <p>Already a member?<Link to="/login">Login here</Link></p>
                </div>
            </div>
        </main>
    );
}

export default SignupPage;