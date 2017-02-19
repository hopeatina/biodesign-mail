import React, {Component} from 'react';
import '../App.css';

class ReplyMsg extends Component {
    render() {
        return (
            <div className="ReplyMsg">
                ReplyMsg
                <div onClick={() => this.props.goTo(null)}> Back</div>
                <div onClick={() => this.props.goTo("Inbox")}> Send</div>
            </div>
        );
    }
}

export default ReplyMsg;
