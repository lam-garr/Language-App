import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import jpnImg from "../utils/imgs/jpn.jpg";
import frnImg from "../utils/imgs/frn.jpg";
import cnImg from "../utils/imgs/cn.jpg";

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
                        Start learning a new language now!
                    </div>
                    <div className="home-secOne-imgs">
                        <div className="home-secOne-imgs-pOne">
                            <div><img src={jpnImg} alt=""/></div>
                            <div><img src={cnImg} alt=""/></div>
                        </div>
                        <div className="home-secOne-imgs-pTwo">
                            <img src={frnImg} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-section-two">
                <div className="home-sec-two-container">
                    <div className="home-secTwo-description">
                        The free, fun, and effective way
                    </div>
                    <div className="home-secTwo-cards">
                        <div className="home-secTwo-cardOne">
                            <span>Explore new languages</span>
                            <span>Learn everything you need to have real world conversations.</span>
                        </div>
                        <div className="home-secTwo-cardTwo">
                            <span>Lesson based learning</span>
                            <span>Created by a team of experienced language teachers, designed for all levels.</span>
                        </div>
                        <div className="home-secTwo-cardThree">
                            <span>Stay motivated</span>
                            <span>We make it easy to track and monitor learning progress.</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-section-three">
                <div className="home-sec-three-container">
                    <div className="home-secThree-description">
                        <div className="home-secThree-title">
                            Subscription Options
                        </div>
                        <div className="home-secThree-content">
                            <span>Get Started For Free</span>
                            <span>
                                Get unlimited access to all of our lessons designed for all learners.
                            </span>
                            <Link to={"/login"}><button className="home-secThree-btn">Explore Now</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;