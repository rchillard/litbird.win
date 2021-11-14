import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid"
import './Modal.css'

class Modal extends Component {
    constructor(props) {
        super(props)
        this.registerAnswer = this.registerAnswer.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.generateBinaryChoice = this.generateBinaryChoice.bind(this);
        this.generateMultipleChoice = this.generateMultipleChoice.bind(this);
    }

    registerAnswer(e) {
        e.preventDefault() // Capture first onClick from Input (prevent double event from Label+Input)
        this.props.recordAnswer(e.target.textContent) // Call function on parent Quiz component and record State
    }

    closeModal(e) {
        this.props.hideModal(e);
    }

    generateBinaryChoice(answers) {
        console.log("Creating binary choice of answers")
        return (
            <div className="AnswerBinary">
                <label className="AnswerBinaryLeft" htmlFor={answers[0]} key={uuidv4()} onClick={this.registerAnswer}>{answers[0]}
                    <input type="radio" id={answers[0]} name={answers[0]} value={answers[0]} />
                </label>
                <label className="AnswerBinaryRight" htmlFor={answers[1]} key={uuidv4()} onClick={this.registerAnswer}>{answers[1]}
                    <input type="radio" id={answers[1]} name={answers[1]} value={answers[1]} />
                </label>
            </div >
        )
    }

    generateMultipleChoice(answers) {
        console.log("Creating multiple choice list of answers")
        return (
            answers.map(a => {
                return (<label className="AnswerMultiple" htmlFor={a} key={uuidv4()} onClick={this.registerAnswer}>{a}
                    <input type="radio" id={a} name={a} value={a} />
                </label>)
            })
        )
    }

    render() {
        const { question, answers } = this.props;
        console.log(answers.length > 2)
        return (
            <div className="Modal" onClick={this.closeModal}>
                <div className="Content" >
                    <div className="Question">
                        <h4>{question}</h4>
                    </div>
                    <div className="Answers">
                        <form>
                            {answers.length > 2 ? this.generateMultipleChoice(answers) : this.generateBinaryChoice(answers)}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal