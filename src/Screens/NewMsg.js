import React, {Component} from 'react';
import '../App.css';

class NewMsg extends Component {
    render() {
        return (
            <div className="NewMsg">
                NewMsg
                <div className="header">
                    <div className="header-close" onClick={() => this.props.goTo("Inbox")}> Close</div>
                    <div className="header-send" onClick={() => this.props.goTo("Inbox")}> Send</div>
                </div>
                <div className="NewMsg-content">
                    <div className="msg-row">To:</div>
                    <div className="msg-row">CC/Bcc:</div>
                    <div className="msg-row">Subject:                     <div className="attach" onClick={() => this.props.goTo("AttachPhoto")}>Attach</div></div>
                    <div className="msg-previous">
                        That works!
                    </div>

                </div>
            </div>
        );
    }
}

export default NewMsg;
