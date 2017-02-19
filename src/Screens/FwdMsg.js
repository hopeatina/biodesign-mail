import React, { Component } from 'react';
import '../App.css';

class FwdMsg extends Component {
    render() {
        return (
            <div className="FwdMsg">
                FwdMsg
                <div onClick={() => this.props.goTo(null)}> Back</div>
                <div onClick={() => this.props.goTo("Inbox")}> Send</div>
            </div>
        );
    }
}

export default FwdMsg;
