import React from "react";
import { Link } from "react-router-dom";
import coursesTblComponentInterface from "../utils/interfaces/coursesTblComponentInterface";
import "../styles/CoursesTableComponent.css";

function CoursesTableComponent(prop: coursesTblComponentInterface) {
    return(
        <table className="course-tbl">
            <tbody>
                <tr className="course-tbl-top">
                    <th>Title</th>
                    <th></th>
                </tr>
                {prop.courseData.map(lesson => {
                    return(
                        <tr>
                            <td>{lesson.title}</td>
                            <td><Link to={`/`}><button className="course-tbl-view-btn">Start Lesson</button></Link></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default CoursesTableComponent;