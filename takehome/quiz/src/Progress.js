import React, { Component } from "react";
import './Progress.css'

// Context
import { CourseContext } from './CourseContext'

// Components
import ProgressRing from './ProgressRing'
import ProgressBook from './ProgressBook'

class Progress extends Component {
    static contextType = CourseContext;

    render() {
        const { studentName, studentGrade } = this.props
        return (
            <div className="Progress">
                <p className="StudentName">{studentName}</p>
                <p className="StudentGrade">Grade {studentGrade}</p>
                <div className="SyllabusStatus">
                    <ProgressRing radius={36} stroke={5} progress={this.context.progress} />
                    <div>
                        <p className="SyllabusText">SYLLABUS STATUS</p>
                        <p className="SyllabusProgress"><strong>{this.context.progress}/100</strong></p>
                    </div>
                </div>
                <p className="StudentGrade">BOOKS IN - PROGRESS</p>
                <ProgressBook booktitle="The Princess and the Pony" bookimg={process.env.PUBLIC_URL + "/pony-on-field-786x552.jpg"} bookprogress={30}/>
                <ProgressBook booktitle="The Pony and the Princess" bookimg={process.env.PUBLIC_URL + "pony-on-field-786x552.jpg"} bookprogress={60}/>
                <ProgressBook booktitle="The Hungry Caterpillar" bookimg={process.env.PUBLIC_URL + "/very-hungry-caterpillar.jpeg"} bookprogress={90}/>
            </div>
        )
    }
}

export default Progress