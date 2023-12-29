import React from "react";
import "../styles/HomePage.css";

function HomePage() {
    return(
        <main className="home-content">
            <header className="home-header">
                <div className="home-header-container">
                </div>
            </header>
            <section className="home-section-one">
                <div className="home-sec-one-container">
                    <div className="home-secOne-description">

                    </div>
                    <div className="home-secOne-imgs">

                    </div>
                </div>
            </section>
            <section className="home-section-two">
                <div className="home-sec-two-container">
                    <div className="home-secTwo-description">
                        
                    </div>
                    <div className="home-secTwo-cards">
                        <div className="home-secTwo-cardOne"></div>
                        <div className="home-secTwo-cardTwo"></div>
                        <div className="home-secTwo-cardThree"></div>
                    </div>
                </div>
            </section>
            <section className="home-section-three">
                <div className="home-sec-three-container">
                    <div className="home-secThree-description">
                        <div className="home-secThree-title">

                        </div>
                        <div className="home-secThree-content">

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;