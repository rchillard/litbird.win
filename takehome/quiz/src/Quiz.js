import React, { Component } from 'react'
import './Quiz.css'

// Contexts
import { CourseContext } from './CourseContext'

// Components
import Modal from './Modal'

class Quiz extends Component {
    static contextType = CourseContext;

    constructor(props) {
        super(props)
        this.state = {
            answerSubmitted: "",
            complete: false,
            visible: false
        }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
        this.recordAnswer = this.recordAnswer.bind(this)
        this.saveAnswer = this.saveAnswer.bind(this)
    }

    showModal(e) {
        this.setState({ visible: true })
    }

    hideModal(e) {
        this.setState({ visible: false })
    }

    recordAnswer(answer) {
        this.setState({ answerSubmitted: answer })
        this.hideModal()
        this.setState({ complete: true })
        this.saveAnswer(answer)
    }

    saveAnswer(answer) {
        if (navigator.onLine) {
            console.log('Online: updating quiz with server')
            // Make POST request to API updating the course Progress
            // fetch(`https://litbird.com/api/course/${id}/progress/25`)
            this.context.updateProgress(25)
            return true;
        } else {
            console.log('Offline: saving quiz result to sessionStorage')
            // Store in localStorage and wait until we have connection again
            sessionStorage.setItem(this.props.id, JSON.stringify(answer));
            return false;
        }
    }

    render() {
        const { id, question, answers } = this.props;
        return (
            <div className="Quiz">
                <h3>Quiz # {id}</h3>
                {this.state.complete ? <p>Completed</p> : <button onClick={this.showModal}>Take Quiz</button>}
                {this.state.visible ? <Modal question={question} answers={answers} hideModal={this.hideModal} recordAnswer={this.recordAnswer} /> : <div></div>}
            </div>
        )
    }
}

export default Quiz