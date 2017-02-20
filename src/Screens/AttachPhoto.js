import React, {Component} from 'react';
import '../App.css';

class AttachPhoto extends Component {
    render() {
        return (
            <div className="inbox">
                Inbox
                <div className="header">
                    <div className="header-title"> Photo Roll</div>
                    <div className="header-cancel" onClick={() => this.props.goTo("NewMsg")}> Back</div>
                </div>

                <div className="photo-grid">
                    <div className="photo-grid-item" onClick={() => this.props.goTo("Preview")}> Preview</div>
                </div>
            </div>
        );
    }
}

export default AttachPhoto;
