import React from 'react';

import getSVGPath from '../getSVGPath';

export default class SVGCanvas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawing: false,
            inProgressLine: [],
        };

        this.mouseDownHandler = this.mouseDownHandler.bind(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        this.mouseUpHandler = this.mouseUpHandler.bind(this);
    }

    mouseDownHandler() {
        this.setState({
            isDrawing: true,
        });
    }

    mouseMoveHandler(event) {
        // Need to refer to a ref of the container because event.target
        // will recognize the path element and mess up calculations
        // Could have also just used currentTarget...
        const domRect = this.refs.canvas.getBoundingClientRect();
        const top = domRect.top;
        // TODO: Why does left give decimal precision?
        // If anyone knows why, I'd love to hear.  For now, let's round
        const left = Math.round(domRect.left);
        const point = {
            x: event.clientX - left,
            y: event.clientY - top,
        };

        if (this.state.isDrawing) {
            this.setState({
                inProgressLine: [...this.state.inProgressLine, point],
            });
        }
    }

    mouseUpHandler() {
        // If I had more time, and really iterated on this concept,
        // I would attach this handler to the window when this component was
        // loaded and remove it on componentWillUnMount.
        // For demo purposes, this is okay
        this.props.addStroke(this.state.inProgressLine);

        this.setState({
            isDrawing: false,
            inProgressLine: []
        });
    }

    render() {
        return (
            <div
                onMouseDown={this.mouseDownHandler}
                onMouseMove={this.mouseMoveHandler}
                onMouseUp={this.mouseUpHandler} 
                style={{
                width: '300px',
                height: '300px'}}
                ref="canvas">
                <svg
                    viewBox="0 0 300 300"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        width: '100%',
                        height: '100%',
                        fill: 'none',
                        stroke: '#000',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '10',
                    }}
                >
                    <path d={getSVGPath(this.state.inProgressLine)} />
                    {
                        this.props.strokeList.length > 0 &&
                        this.props.strokeList.map(stroke => {
                            return (
                                <path d={getSVGPath(stroke)} />
                            );
                        })
                    }
                </svg>
            </div>
        );
    }
}
