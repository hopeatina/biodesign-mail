import React, {Component} from 'react';
import '../App.css';

class ReplyMsg extends Component {
    render() {
        return (
            <div className="ReplyMsg">
                <div className="header">
                    <div className="header-close" onClick={() => this.props.goTo(null)}> Back</div>
                    <div className="header-send" onClick={() => this.props.goTo("Inbox")}> Send</div>
                </div>
                <div className="ReplyMsg-content">
                    <div className="msg-row">To:</div>
                    <div className="msg-row">CC/Bcc:</div>
                    <div className="msg-row">Subject:</div>
                    <div className="msg-previous">
                        That works!
                    </div>

                </div>
            </div>
        );
    }
}

export default ReplyMsg;
