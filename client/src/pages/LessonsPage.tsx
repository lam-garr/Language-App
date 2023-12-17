import React from "react";
import { useState } from "react";
import LessonTableComponent from "../components/LessonTableComponent";
import "../styles/LessonsPage.css";

function LessonsPage() {

    const [ lessonData, setLessonData ] = useState<any[]>([]);

    return(
        <main className="lessons-content">
            <section className="lessons-section-one">
                <div className="lessons-sec-one-title">
                    Lessons
                </div>
            </section>
            <section className="lessons-section-two">
                {lessonData.length ? 
                (<div className="lessons-sec-two-content">
                    <LessonTableComponent lessonData={lessonData}/>
                </div>):
                (<div className="lessons-empty">
                    <span>There's nothing here, start a course to get started!</span>
                </div>)}
            </section>
        </main>
    );
}

export default LessonsPage;