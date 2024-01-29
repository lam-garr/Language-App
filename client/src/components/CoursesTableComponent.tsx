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
                            <td>{lesson}</td>
                            <td><Link to={`/learn`}><button className="course-tbl-view-btn">Start Lesson</button></Link></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default CoursesTableComponent;