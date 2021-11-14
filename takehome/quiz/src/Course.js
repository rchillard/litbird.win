import React, { Component } from 'react'
import './Course.css'

// Contexts
import {CourseProvider} from './CourseContext'

// Components
import Lesson from './Lesson'
import Progress from './Progress'
import Quiz from './Quiz'

class Course extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { courseName } = this.props;
        return (
            <CourseProvider>
                <div className="Course">
                    <div>
                        <h2>Course: {courseName}</h2>
                        <img alt="Julian is a Mermaid" src={process.env.PUBLIC_URL + "/Julian-Is-A-Mermaid-LitNered-Tile-New.jpg"} />
                        <Lesson id={1} />
                        <Quiz id={1} question="What is your favorite color?" answers={["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]} />
                        <Lesson id={2} />
                        <Quiz id={2} question="Who plays the role of Tony Stark in the MCU?" answers={["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Samuel L. Jackson"]} />
                        <Lesson id={3} />
                        <Quiz id={3} question="How many of you collect lightsabers?" answers={["I do", "I don't"]} />
                    </div>
                    <Progress studentName="Azeez R" studentGrade="3"/>
                </div>
            </CourseProvider>
        )
    }
}

export default Course