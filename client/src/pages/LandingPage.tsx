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
                <div className="landing-section-one-title">
                    <h2>Up Next</h2>
                    <div></div>
                    <div></div>
                </div>
                <div className="landing-section-one-parent-container">
                    <div className="landing-sec-one-container-one">
                        <div className="landing-sec-one-cOne-text">
                            <span>Review your past lessons.</span>
                        </div>
                        <div className="landing-sec-one-cOne-button">
                            <div></div>
                            <button>Review</button>
                        </div>
                    </div>
                    <div className="landing-sec-one-container-two">
                        <div className="landing-sec-one-cTwo-text">
                            <span>Continue to the next lesson.</span>
                        </div>
                        <div className="landing-sec-one-cTwo-button">
                            <div></div>
                            <button>Continue</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="landing-section-two">
                <div className="landing-sec-two-container-one">
                    Read a new language like a native!
                    <button>Try New Courses!</button>
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
                        <div className="landing-sec-three-cOne-title">
                            <h2>My Activity</h2>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="landing-sec-three-cOne-content">
                            <div className="landing-sec-three-container-one-loader"></div>
                        </div>
                    </div>
                    <div className="landing-sec-three-container-two">
                        <div className="landing-sec-three-cTwo-title">
                            <h2>Acheivements</h2>
                        </div>
                        <div className="landing-sec-three-cTwo-content">
                            <div className="landing-sec-three-container-two-loader"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LandingPage;