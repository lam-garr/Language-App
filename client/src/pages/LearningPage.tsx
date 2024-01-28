import React, { useEffect, useState } from "react";
import "../styles/LearningPage.css";

function LearningPage() {

    const [ lessonData, setLessonData ] = useState<any[]>([]);

    const [ lessonTitle, setLessonTitle ] = useState("");

    const [ currentData, setCurrentData ] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const token = window.localStorage.getItem("AccessToken");

            let dataToken;

            if(token) {
                dataToken = JSON.parse(token);
            }

            const response = await fetch("http://localhost:5000/api/user-data", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${dataToken}`
                }
            });

            const resObj = await response.json();

            if(resObj) {
                setCurrentData(resObj);
            }
        }

        fetchData();
    })

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch("http://localhost:5000/api/get-lessons", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({lessonName: "japanese", lessonId: currentData})
            });

            const resObj = await response.json();

            const lesson = resObj.languageLesson;

            if(lesson) {
                setLessonTitle(lesson.lessonTitle);
                setLessonData(lesson.lessonContent);
            }
        }

        fetchData();
    })

    return(
        <main className="learning-main">
            <div className="learning-content">
                <section className="learning-sec-one">
                    <div className="learning-sec-one-title">
                       {/*  <span className="learning-sOne-title-id"><h1>{currentData}</h1></span> */}
                        <span className="learning-sOne-title-name"><h1>{lessonTitle}</h1></span>
                    </div>
                </section>
                <section className="learning-sec-two">
                    <div className="learning-sec-two-content">
                        {lessonData.map(item => {
                            return(<span>{item}</span>);
                        })}
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