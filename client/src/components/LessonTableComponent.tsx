import React from "react";
import { Link } from "react-router-dom";
import lessonTblComponentInterface from "../utils/interfaces/lessonTblComponentInterface";
import "../styles/LessonTableComponent.css";

function LessonTableComponent(prop: lessonTblComponentInterface) {
    return(
        <table className="lesson-tbl">
            <tbody>
                <tr className="lesson-tbl-top">
                    <th>Id</th>
                    <th>Title</th>
                    <th>View</th>
                </tr>
                {prop.lessonData.map(lesson => {
                    return(
                        <tr>
                            <td>{lesson.id}</td>
                            <td>{lesson.title}</td>
                            <td><Link to={`/user/`}><button className="lesson-tbl-view-btn">View</button></Link></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default LessonTableComponent;