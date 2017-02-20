import React, {Component} from 'react';
import '../App.css';

class OpenMsg extends Component {
    toggleDropdown() {
        console.log("toggledDropdown");
    }

    render() {
        return (
            <div className="OpenMsg">
                OpenMsg
                <div className="header">
                    <div className="header-arrow" onClick={() => this.props.goTo("Inbox")}> Inbox</div>
                    <div className="header-icon" onClick={() => this.props.goTo("Inbox")}> Archive</div>
                    <div className="header-icon" onClick={() => this.props.goTo("Inbox")}> Delete</div>
                    <div className="header-icon"> Dropdown</div>
                </div>
                <div className="header-dropdown" onClick={this.toggleDropdown()}>
                    <div onClick={() => this.props.goTo("MoveMsg")}>Move</div>
                    <div onClick={() => this.props.goTo("Inbox")}>Mark as Read</div>
                    <div onClick={() => this.props.goTo("Inbox")}>Spam</div>
                </div>

                <div className="OpenMsg-content">
                    <div className="subject-line"></div>
                    <div className="open-message"></div>
                    <div className="open-message"></div>
                    <div className="open-message">
                        <div onClick={() => this.props.goTo("ReplyMsg")}> Reply</div>
                    </div>
                    <div onClick={() => this.props.goTo("ViewAttach")}> Attachment</div>
                    <div onClick={() => this.props.goTo("ReplyMsg")}> Reply</div>
                    <div onClick={() => this.props.goTo("FwdMsg")}> Forward</div>
                </div>
            </div>
        );
    }
}

export default OpenMsg;
