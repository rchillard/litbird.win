import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid"
import './Modal.css'

class Modal extends Component {
    constructor(props) {
        super(props)
        this.registerAnswer = this.registerAnswer.bind(this);
    }

    registerAnswer(e) {
        e.preventDefault() // Capture first onClick from Input (prevent double event from Label+Input)
        console.log(e.target)
    }

    render() {
        const { question, answers } = this.props;
        return (
            <div className="Modal">
                <div className="Content">
                    <div className="Question">
                        <h4>{question}</h4>
                    </div>
                    <div className="Answers">
                        <form>
                            {answers.map(a => {
                            return (<label className="Answer" name={a} key={uuidv4()} onClick={this.registerAnswer}>{a}
                                    <input type="radio" name={a} value={a} />
                                </label>)
                            })}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal