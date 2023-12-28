import React, { useEffect } from "react";
import { useState } from "react";
import LessonTableComponent from "../components/LessonTableComponent";
import "../styles/LessonsPage.css";

function LessonsPage() {

    const [ lessonData, setLessonData ] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = window.localStorage.getItem("AccessToken");

            let dataToken;

            if(data) {
                dataToken = JSON.parse(data);
            }

            const response = await fetch("/api", {
                method:"GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${dataToken}`
                }
            });

            const resObj = await response.json();

            if(resObj) {
                setLessonData(resObj);
            }
        }

        //fetchData();
    }, [])

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