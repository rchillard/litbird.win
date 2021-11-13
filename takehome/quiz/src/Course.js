import React, { component } from 'react'
import './Course.css'

// Components
import Quiz from './Quiz'
import Lesson from './Lesson'

class Course extends React.Component {
    render() {
        return (
            <div className="Course">
                <h2>I am a course!</h2>
                <Lesson />
                <Quiz />
                <Lesson />
                <Quiz />
                <Lesson />
                <Quiz />
            </div>
        )
    }
}

export default Course