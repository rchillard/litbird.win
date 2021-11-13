import React, { Component } from "react";
import './Progress.css'

// Context
import { CourseContext } from './CourseContext'

class ProgressTracker extends Component {
    static contextType = CourseContext;

    render() {
        return (
            <div className="Progress">
                <h3>Progress</h3>
                <h2>Linear (native HTML progress element)</h2>
                <label for="progress">Course progress: </label>
                <progress id="progress" max="100" value={this.context.progress}>
                    {this.context.progress}%
                </progress>
                <h2>Radial (using CSS)</h2>
                <div className={`radialProgressBar progress-${this.context.progress}`}>
                    <div className="overlay">{this.context.progress}</div>
                </div>

            </div>
        )
    }
}

export default ProgressTracker