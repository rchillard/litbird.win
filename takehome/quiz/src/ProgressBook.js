import React, { Component } from "react";
import './ProgressBook.css'

// Sub-components
import ProgressBar from './ProgressBar'

class ProgressBook extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { booktitle, bookimg, bookprogress } = this.props
        return (
            <div className="ProgressBook">
                <img alt={booktitle} src={bookimg}></img>
                <ProgressBar booktitle={booktitle} bookprogress={bookprogress} />
                <span>{bookprogress}%</span>
            </div>
        )
    }
}

export default ProgressBook