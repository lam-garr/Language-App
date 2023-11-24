import React from "react";
import landingPageInterface from "../utils/interfaces/landingPageInterface";
import "../styles/LandingPage.css";

function LandingPage() {
    return(
        <main className="landing-content">
            <header className="landing-header">
                <div className="landing-header-container">
                    <h1>Hi, your name</h1>
                </div>
            </header>
            <section className="landing-section-one">
                <div className="landing-section-one-parent-container">
                    <div className="landing-sec-one-container-one">
                        review lessons
                    </div>
                    <div className="landing-sec-one-container-two">
                        continue to next lessons
                    </div>
                </div>
            </section>
            <section className="landing-section-two">
                <div className="landing-sec-two-container-one">
                    try new courses!
                </div>
            </section>
            <section className="landing-section-three">
                <div className="landing-section-three-title">
                    <h2>My Progress</h2>
                    <div></div>
                    <div></div>
                </div>
                <div className="landing-section-three-parent-container">
                    <div className="landing-sec-three-container-one">
                        my activity
                    </div>
                    <div className="landing-sec-three-container-two">
                        acheivemnets
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LandingPage;