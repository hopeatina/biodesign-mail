import React, {Component} from 'react';
import '../App.css';

class MoveMsg extends Component {
    render() {
        return (
            <div className="MoveMsg">
                <div className="header">
                    <div className="header-close" onClick={() => this.props.goTo(null)}> Back</div>
                    <div className="header-title">Move...</div>
                </div>
                <div className="move-content" onClick={() => this.props.goTo("Inbox")}> Send</div>

            </div>
        );
    }
}

export default MoveMsg;
