import React from "react";
import "../styles/LessonsPage.css";

function LessonsPage() {
    return(
        <main className="lessons-content">
            <section className="lessons-section-one">
                <div className="lessons-sec-one-title">
                    Lessons
                </div>
            </section>
            <section className="lessons-section-two">
                {true ? 
                (<div className="lessons-sec-two-content">
                    
                </div>):
                (<div className="lessons-empty">
                    <span>There's nothing here, start a course to get started!</span>
                </div>)}
            </section>
        </main>
    );
}

export default LessonsPage;