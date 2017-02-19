import React, { Component } from 'react';
import '../App.css';

class ViewAttach extends Component {
    render() {
        return (
            <div className="ViewAttach">
                ViewAttach
                <div onClick={() => this.props.goTo(null)}> Back</div>
                <div onClick={() => this.props.goTo("Inbox")}> Download</div>
            </div>
        );
    }
}

export default ViewAttach;
