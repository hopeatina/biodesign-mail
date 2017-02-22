import React, {Component} from 'react';
import '../App.css';

class ViewAttach extends Component {
    render() {
        return (
            <div className="ViewAttach">
                <div className="header">
                    <div className="header-arrow" onClick={() => this.props.goTo(null)}> Mail</div>
                </div>
                <div className="Attachment">
                    Attachment Image
                </div>
                <div className="footer">
                    <div className="footer-icon" onClick={() => this.props.goTo("Inbox")}> D</div>
                </div>
            </div>
        );
    }
}

export default ViewAttach;
