import React, { Component } from 'react'
import './Course.css'

// Contexts
import { CourseProvider } from './CourseContext'

// Components
import Lesson from './Lesson'
import Progress from './Progress'
import Quiz from './Quiz'

class Course extends Component {
    render() {
        const { courseName } = this.props;
        return (
            <CourseProvider>
                <div className="Course">
                    <div>
                        <h2>Course: {courseName}</h2>
                        <img alt="Julian is a Mermaid" className="CourseImg" src={process.env.PUBLIC_URL + "/Julian-Is-A-Mermaid-LitNered-Tile-New.jpg"} />
                        <Lesson id={1} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                        <Quiz id={1} question="What is your favorite color?" answers={["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]} />
                        <Lesson id={2} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                        <Quiz id={2} question="Who plays the role of Tony Stark in the MCU?" answers={["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Samuel L. Jackson"]} />
                        <Lesson id={3} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                        <Quiz id={3} question="How many of you collect lightsabers?" answers={["I do", "I don't"]} />
                    </div>
                    <Progress studentName="Azeez R" studentGrade="3" />
                </div>
            </CourseProvider>
        )
    }
}

export default Course