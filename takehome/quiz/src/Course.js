import React, { Component } from 'react'
import './Course.css'

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
            <div className="Course">
                <div>
                    <h2>Course: {courseName}</h2>
                    <Lesson id={1} />
                    <Quiz id={1} />
                    <Lesson id={2} />
                    <Quiz id={2} />
                    <Lesson id={3} />
                    <Quiz id={3} />
                </div>
                <Progress />
            </div>
        )
    }
}

export default Course