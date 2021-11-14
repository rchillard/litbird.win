import React, { Component, createContext } from 'react'

export const CourseContext = createContext()

export class CourseProvider extends Component {
    constructor(props) {
        super(props)
        this.state = { progress: 10 }
        this.updateProgress = this.updateProgress.bind(this)
        
        // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine
        window.addEventListener('online', function (e) {
            console.log('We are online again!')
            Object.keys(sessionStorage).forEach(function (key) {
                let savedAnswer = sessionStorage.getItem(key)
                    console.log('Found locally saved Quiz:')
                    console.log(`${key}: ${savedAnswer}`)
                    // fetch(`https://litbird.com/api/course/${id}/quiz/${key}/${savedAnswer}`)
                    sessionStorage.removeItem(key)
            });
        }, false);
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
