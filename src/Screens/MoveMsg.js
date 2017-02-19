import React, { Component } from 'react';
import '../App.css';

class MoveMsg extends Component {
    render() {
        return (
            <div className="MoveMsg">
                MoveMsg
                <div onClick={() => this.props.goTo(null)}> Back</div>
                <div onClick={() => this.props.goTo("Inbox")}> Send</div>
            </div>
        );
    }
}

export default MoveMsg;
