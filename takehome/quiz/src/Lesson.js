import React, { Component } from 'react'
import './Lesson.css'

class Lesson extends Component {
    render() {
        const { id, description } = this.props;
        return (
            <div className="Lesson">
                <h3>Lesson # {id}</h3>
                <p>{description}</p>
            </div>
        )
    }
}

export default Lesson