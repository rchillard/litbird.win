import React, { Component } from 'react'
import './Quiz.css'

// Contexts
import {CourseContext} from './CourseContext'

// Components
import Modal from './Modal'

class Quiz extends Component {
    static contextType = CourseContext;

    constructor(props) {
        super(props)
        this.state = {
            answerSubmitted: "",
        }
        this.state = {
            complete: false,
            visible: false
        }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
        this.recordAnswer = this.recordAnswer.bind(this)
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
        this.setState( { complete: true })
        this.context.updateProgress(25)
    }

    render() {
        const { id, question, answers } = this.props;
        return (
            <div className="Quiz">
                <h3>Quiz # {id}</h3>
                { this.state.complete ? <p>Completed</p> : <button onClick={this.showModal}>Take Quiz</button> }
                { this.state.visible ? <Modal question={question} answers={answers} hideModal={this.hideModal} recordAnswer={this.recordAnswer} /> : <div></div> }
            </div>
        )
    }
}

export default Quiz