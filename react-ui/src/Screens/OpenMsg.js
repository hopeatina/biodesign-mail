import React, {Component} from 'react';
import '../App.css';

class OpenMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false,
            arrow: "open-head-icon fa-arrow-down fa fa-2x "
        };
    }

    toggleDropdown() {
        this.setState({
            dropdown: !this.state.dropdown,
            arrow: !this.state.dropdown ? "open-head-blue  fa-arrow-up fa fa-2x " : "open-head-icon fa fa-2x fa-arrow-down"
        });
    }

    render() {
        return (
            <div className="OpenMsg">
                <div className="header">
                    <div className="header-arrow" onClick={() => this.props.goTo("Inbox")}> Inbox</div>
                    <div className="header-col2">
                        <div className="header-icon" onClick={() => this.props.goTo("Inbox", 'archive')}>
                            <image role="presentation" className="fa fa-2x fa-download open-head-icon"></image>
                        </div>
                        <div className="header-icon" onClick={() => this.props.goTo("Inbox", 'delete')}>
                            <image role="presentation" className="fa fa-2x fa-trash open-head-icon"></image>
                        </div>
                        <div className="header-icon" onClick={ () => this.toggleDropdown()}>
                            <image role="presentation" className={this.state.arrow}></image>
                        </div>
                    </div>
                </div>
                { this.state.dropdown ?
                    <div className="header-dropdown" onClick={() => this.toggleDropdown()}>
                        <div className="dropdown-div" onClick={() => this.props.goTo("MoveMsg", 'move')}>
                            <image className="dropdown-icon fa fa-folder"></image>
                            <div>Move</div>
                        </div>
                        <div className="dropdown-div" onClick={() => this.props.goTo("Inbox", 'read')}>
                            <image className="dropdown-icon fa fa-envelope-o"></image>
                            <div>Read</div>
                        </div>
                        <div className="dropdown-div" onClick={() => this.props.goTo("Inbox", 'spam')}>
                            <image className="dropdown-icon fa fa-warning"></image>
                            <div>Spam</div>
                        </div>
                    </div> : null }
                <div className="OpenMsg-content">
                    <div className="subject-line"> We should grab some dinner tonight.</div>
                    <div className="open-message">
                        <img className="open-icon"
                             src="http://www.tmc.edu/innovation/wp-content/uploads/sites/4/2016/04/Premal-Kamdar--250x250.jpg"></img>
                        <div className="open-col2">
                            <div className="open-row1">
                                <div className="open-name">Premal Kamdar</div>
                                <div className="open-time"> 2:39</div>
                            </div>
                            <div className="open-text">How do you feel about grabbing a burger tonight?
                                I know a great place.
                            </div>
                        </div>
                    </div>
                    <div className="open-message">
                        <img className="open-icon"
                             src="http://www.tmc.edu/innovation/wp-content/uploads/sites/4/2016/04/Raven-Veal--250x250.png"></img>
                        <div className="open-col2">
                            <div className="open-row1">
                                <div className="open-name">Raven Veal</div>
                                <div className="open-time"> 4:14</div>
                            </div>
                            <div className="open-text">Is it that place Victor was talking about earlier today?
                            </div>
                        </div>
                    </div>
                    <div className="open-message-full">
                        <div className="open-full-row1">
                            <img className="open-icon"
                                 src="http://www.tmc.edu/innovation/wp-content/uploads/sites/4/2016/07/Elie_05-250x250.jpg"></img>
                            <div className="open-col2">
                                <div className="open-row1">
                                    <div className="open-name">Elie Balesh</div>
                                    <div className="open-reply" onClick={() => this.props.goTo("ReplyMsg", 'sent')}>
                                        <image role="presentation" className="fa fa-reply fa"></image>
                                    </div>
                                </div>
                                <div className="open-other">to Raven Veal
                                    <div className="open-other-small"> 15 seconds Ago</div>
                                </div>
                            </div>
                        </div>
                        <div className="open-full-row-2">
                            <div>You know it is.</div>
                            <div>Burgerlord of the Rings on me.</div>
                            <div>Need this relief from caregiver interviewing burnout.</div>
                            <div>Meet there at 6 pm?</div>
                        </div>
                    </div>
                    <div className="open-attachcnt"> 1 Attachment</div>
                    <div className="open-attachment" onClick={() => this.props.goTo("ViewAttach")}>
                        <img className="attach-icon"
                             src="http://www.iconsfind.com/wp-content/uploads/2015/11/20151104_56398224568e0-210x210.png"></img>
                        <div className="attach-text">burger-week-2017.jpg</div>
                    </div>
                    <div className="open-action-row">
                        <div className="open-action-reply" onClick={() => this.props.goTo("ReplyMsg")}>
                            <image role="presentation" className="fa fa-reply"></image>
                            Reply
                        </div>
                        <div className="open-action-fwd" onClick={() => this.props.goTo("FwdMsg")}> Forward
                            <image role="presentation" className="fa fa-arrow-right"></image>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OpenMsg;
