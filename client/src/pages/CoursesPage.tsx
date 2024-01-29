import React, { useEffect } from "react";
import { useState } from "react";
import CoursesTableComponent from "../components/CoursesTableComponent";
import "../styles/CoursesPage.css";

function CoursesPage() {

    const [ coursesData, setCoursesData ] = useState<any[]>([]);

    useEffect(() => {
        setCoursesData(["japanese"]);
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