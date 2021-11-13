import React, { Component } from 'react'
import './Quiz.css'
import Modal from './Modal'

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            complete: false,
            visible: false
        }
        this.showQuiz = this.showQuiz.bind(this)
        this.hideQuiz = this.hideQuiz.bind(this)
    }

    showQuiz(e) {
        this.setState({ visible: true })
    }

    hideQuiz(e) {
        this.setState({ visible: false })
    }

    render() {
        const { id, question, answers } = this.props;
        return (
            <div className="Quiz">
                <h3>Quiz # {id}</h3>
                { this.state.complete ? <p>Completed</p> : <button onClick={this.showQuiz}>Take Quiz</button> }
                { this.state.visible ? <Modal question={question} answers={answers}/> : <div></div> }
            </div>
        )
    }
}

export default Quiz