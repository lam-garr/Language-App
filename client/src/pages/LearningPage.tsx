import React, { useEffect, useState } from "react";
import "../styles/LearningPage.css";

function LearningPage() {

    const [ lessonData, setLessonData ] = useState<any[]>([]);

    const [ lessonTitle, setLessonTitle ] = useState("");

    const [ currentData, setCurrentData ] = useState("");

    const [ maxLessons, setMaxLessons ] = useState(false);

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

    const newLesson = async () => {
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
                setMaxLessons(false);
            } else {
                setLessonTitle("End of Lessons");
                setLessonData(["Come back later for more lessons!"]);
                setMaxLessons(true);
            }
    }

    const previousClick = async () => {

        if(Number(currentData) === 0) return;

        const prevData = Number(currentData) - 1;

        const token = window.localStorage.getItem("AccessToken");

        let dataToken;

        if(token) {
            dataToken = JSON.parse(token);
        }

        const response = await fetch("http://localhost:5000/api/update-user-data", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${dataToken}`
            },
            body: JSON.stringify({userData: prevData.toString()})
        });

        const resObj = await response.json();

        if(resObj) {
            newLesson();
        }
    }

    const nextClick = async () => {

        if(maxLessons) return;

        const prevData = Number(currentData) + 1;

        const token = window.localStorage.getItem("AccessToken");

        let dataToken;

        if(token) {
            dataToken = JSON.parse(token);
        }

        const response = await fetch("http://localhost:5000/api/update-user-data", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${dataToken}`
            },
            body: JSON.stringify({userData: prevData.toString()})
        });

        const resObj = await response.json();

        if(resObj) {
            newLesson();
        }
    }

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
                        <button className="learning-sThree-left-btn" onClick={previousClick}>prev</button>
                        <button className="learning-sThree-right-btn" onClick={nextClick} disabled={maxLessons}>next</button>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default LearningPage;