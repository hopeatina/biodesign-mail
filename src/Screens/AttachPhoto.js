import React, { Component } from 'react';
import '../App.css';

class AttachPhoto extends Component {
    render() {
        return (
            <div className="inbox">
                Inbox
                <div onClick={() => this.props.goTo("NewMsg")}> Back</div>
                <div onClick={() => this.props.goTo("Preview")}> Preview</div>
            </div>
        );
    }
}

export default AttachPhoto;
