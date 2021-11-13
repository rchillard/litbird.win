import React, { Component } from 'react'
import './Quiz.css'

class Quiz extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id } = this.props;
        return (
            <div className="Quiz">
                <h3>Quiz # {id}</h3>
            </div>
        )
    }
}

export default Quiz