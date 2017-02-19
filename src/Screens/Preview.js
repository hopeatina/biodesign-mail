import React, { Component } from 'react';
import '../App.css';

class Preview extends Component {
    render() {
        return (
            <div className="inbox">
                Preview
                <div onClick={() => this.props.goTo("AttachPhoto")}> Back</div>
                <div onClick={() => this.props.goTo("NewMsg")}> Attach</div>
            </div>
        );
    }
}

export default Preview;
