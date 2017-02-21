import React, {Component} from 'react';
import '../App.css';

class AttachPhoto extends Component {
    constructor(props) {
        super(props);
        console.log('setup the props');
    }

    createPhotoGrid() {
        const colors = [
            "#f44336", "#E91E63", "#9C27B0", "#2196F3", "#4CAF50", "#FF9800", "#795548", "#607D8B",
            "#f44336", "#E91E63", "#9C27B0", "#2196F3", "#4CAF50", "#FF9800", "#795548", "#607D8B",
            "#f44336", "#E91E63", "#9C27B0", "#2196F3", "#4CAF50", "#FF9800", "#795548", "#607D8B",
            "#f44336", "#E91E63", "#9C27B0", "#2196F3", "#4CAF50", "#FF9800", "#795548", "#607D8B"
        ];
        var colorslist = colors.map(function (color, index) {
            const thistyle = {background: color};
            return <div key={index} className="photo-grid-item"
                        style={thistyle}></div>
        });
        // console.log("we got the colors");
        return colorslist;
    }

    render() {
        return (
            <div className="inbox">
                Inbox
                <div className="header">
                    <div className="header-title"> Photo Roll</div>
                    <div className="header-cancel" onClick={() => this.props.goTo("NewMsg")}> Back</div>
                </div>

                <div className="photo-grid" onClick={() => this.props.goTo("Preview")} >
                    {this.createPhotoGrid()}
                </div>
            </div>
        );
    }
}

export default AttachPhoto;
