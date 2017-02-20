import React, {Component} from 'react';
import '../App.css';

class Preview extends Component {
    render() {
        return (
            <div className="Preview">
                Preview
                <div className="header">
                    <div className="header-arrow" onClick={() => this.props.goTo("AttachPhoto")}> Back</div>
                    <div className="header-send" onClick={() => this.props.goTo("NewMsg")}> Attach</div>
                </div>
                <div className="preview-image">

                </div>

            </div>
        );
    }
}

export default Preview;
