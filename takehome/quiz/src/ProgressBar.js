import React, { Component } from "react";
import './ProgressBar.css'

class ProgressBar extends Component {
    render() {
        let {booktitle, bookprogress} = this.props
        return (
            <div className="ProgressBar">
                <label htmlFor="progress">{booktitle}</label>
                <progress id="progress" max="100" value={bookprogress}>
                    {bookprogress}%
                </progress>
            </div>
        )
    }
}

export default ProgressBar