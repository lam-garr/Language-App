import React from "react";
import "../styles/LearningPage.css";

function LearningPage() {
    return(
        <main className="learning-main">
            <div className="learning-content">
                <section className="learning-sec-one">
                    <div className="learning-sec-one-title">
                        <span className="learning-sOne-title-id"><h1>0.0</h1></span>
                        <span className="learning-sOne-title-name"><h1>title</h1></span>
                    </div>
                </section>
                <section className="learning-sec-two">
                    <div className="learning-sec-two-content">
                        content
                    </div>
                </section>
                <section className="learning-sec-three">
                    <div className="learning-sec-three-content">
                        <button className="learning-sThree-left-btn">left</button>
                        <button className="learning-sThree-right-btn">right</button>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default LearningPage;