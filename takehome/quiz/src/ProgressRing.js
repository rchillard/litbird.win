import React, { Component } from "react";
import './ProgressRing.css'

// https://css-tricks.com/building-progress-ring-quickly/
class ProgressRing extends React.Component {
    static defaultProps = {
        radius: "36",
        stroke: "white",
        progress: "10"
    }

    constructor(props) {
        super(props);
        const { radius, stroke } = this.props;
        this.normalizedRadius = radius - stroke * 2;
        this.circumference = this.normalizedRadius * 2 * Math.PI;
    }

    render() {
        const { radius, stroke, progress } = this.props;
        const strokeDashoffset = this.circumference - progress / 100 * this.circumference;

        return (
            <div className="ProgressRing">
                {/* <span className="ProgressText">{progress}%</span> */}
                <svg
                    height={radius * 2}
                    width={radius * 2}
                >
                    <text x={radius - (stroke * 2)} y={radius + stroke} fill="white">{progress}&#37;</text> {/* &#37; is the HTML Entity for % */}
                    <circle
                        stroke="white"
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeDasharray={this.circumference + ' ' + this.circumference}
                        style={{ strokeDashoffset }}
                        strokeWidth={stroke}
                        r={this.normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                </svg>
            </div>
        );
    }
}

export default ProgressRing