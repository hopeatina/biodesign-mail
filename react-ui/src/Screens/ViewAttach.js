import React, {Component} from 'react';
import '../App.css';

class ViewAttach extends Component {
    render() {
        return (
            <div className="ViewAttach">
                <div className="header">
                    <div className="header-arrow" onClick={() => this.props.goTo(null)}> Mail</div>
                </div>
                <img className="Attachment"
                     src="http://www.bubbastexasburgershack.com/uploads/9/2/0/3/92035058/img-2752-2_orig.jpg">
                </img>
                <div className="footer">
                    <div className="footer-icon" onClick={() => this.props.goTo("Inbox", 'archive')}>
                        <image className="fa fa-2x fa-download" ></image>
                    </div>

                </div>
            </div>
        );
    }
}

export default ViewAttach;
