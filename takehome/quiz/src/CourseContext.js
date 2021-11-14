import React, { Component, createContext } from 'react'

export const CourseContext = createContext()

export class CourseProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {progress: 10}
        this.updateProgress = this.updateProgress.bind(this)
    }

    updateProgress(value) {
        this.setState({ progress: this.state.progress + value })
    }

    render() {
        return (
            <CourseContext.Provider value={{ progress: this.state.progress, updateProgress: this.updateProgress }}>
                {this.props.children}
            </CourseContext.Provider>
        )
    }
}
