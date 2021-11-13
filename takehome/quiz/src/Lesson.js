import React, { Component } from 'react'
import './Lesson.css'

class Lesson extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id } = this.props;
        return (
            <div className="Lesson">
                <h3>Lesson # {id}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        )
    }
}

export default Lesson