import React, { Component } from 'react';
import '../App.css';

class NewMsg extends Component {
    render() {
        return (
            <div className="inbox">
                NewMsg
                <div onClick={() => this.props.goTo("Inbox")}> Back</div>
                <div onClick={() => this.props.goTo("AttachPhoto")}> Attach Photo</div>
            </div>
        );
    }
}

export default NewMsg;
