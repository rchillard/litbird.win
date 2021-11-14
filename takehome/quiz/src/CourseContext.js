import React, { Component, createContext } from 'react'

export const CourseContext = createContext()

export class CourseProvider extends Component {
    constructor(props) {
        super(props)
        this.state = { progress: "90" }
    }
    render() {
        return (
            <CourseContext.Provider value={{ progress: this.state.progress }}>
                {this.props.children}
            </CourseContext.Provider>
        )
    }
}
