import React, { useEffect } from "react";
import { useState } from "react";
import CoursesTableComponent from "../components/CoursesTableComponent";
import "../styles/CoursesPage.css";

function CoursesPage() {

    const [ coursesData, setCoursesData ] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch("http://localhost:5000/api/get-courses", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const resObj = await response.json();

            const courses = resObj.courses;
            //expected value: ["Chinese","French","Japanese","Korean","Spanish"]
            if(courses) {
                setCoursesData(courses);
            }
        }

        fetchData();
    })

    return(
        <main className="courses-main-content">
            <section className="courses-section-one">
                <div className="courses-sec-one-title">
                    <h1>Courses</h1>
                </div>
            </section>
            <section className="courses-section-two">
                {coursesData.length ?
                (<div className="courses-sec-two-course-options">
                    <CoursesTableComponent courseData={coursesData}/>
                </div>):
                (<div className="courses-empty">
                    There seems to be an error, please try again!
                </div>)}
            </section>
        </main>
    );
}

export default CoursesPage;