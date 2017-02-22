import React, {Component} from 'react';
import '../App.css';

class OpenMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false
        };
    }

    toggleDropdown() {
        this.setState({
            dropdown: !this.state.dropdown
        });
    }

    render() {
        return (
            <div className="OpenMsg">
                <div className="header">
                    <div className="header-arrow" onClick={() => this.props.goTo("Inbox")}> Inbox</div>
                    <div className="header-col2">
                        <div className="header-icon" onClick={() => this.props.goTo("Inbox", 'archive')}>A</div>
                        <div className="header-icon" onClick={() => this.props.goTo("Inbox", 'delete')}>D</div>
                        <div className="header-icon" onClick={ () => this.toggleDropdown()}>V</div>
                    </div>
                </div>
                { this.state.dropdown ?
                    <div className="header-dropdown" onClick={() => this.toggleDropdown()}>
                        <div onClick={() => this.props.goTo("MoveMsg")}>
                            <div className="dropdown-icon">Icon</div>
                            <div>Move</div>
                        </div>
                        <div onClick={() => this.props.goTo("Inbox", 'read')}>
                            <div className="dropdown-icon">Icon</div>
                            <div>Read</div>
                        </div>
                        <div onClick={() => this.props.goTo("Inbox", 'spam')}>
                            <div className="dropdown-icon">Icon</div>
                            <div>Spam</div>
                        </div>
                    </div> : null }
                <div className="OpenMsg-content">
                    <div className="subject-line"> We should grab some dinner tonight.</div>
                    <div className="open-message">
                        <div className="open-icon"></div>
                        <div className="open-col2">
                            <div className="open-row1">
                                <div className="open-name">Matt Vickers</div>
                                <div className="open-time"> 14:39</div>
                            </div>
                            <div className="open-text">How do you feel about grabbing a burger tonight?
                                I know a great place.
                            </div>
                        </div>
                    </div>
                    <div className="open-message">
                        <div className="open-icon"></div>
                        <div className="open-col2">
                            <div className="open-row1">
                                <div className="open-name">Billy Kiely</div>
                                <div className="open-time"> 8:14</div>
                            </div>
                            <div className="open-text">Is it that place Jon was talking about earlier today?
                            </div>
                        </div>
                    </div>
                    <div className="open-message-full">
                        <div className="open-full-row1">
                            <div className="open-icon"></div>
                            <div className="open-col2">
                                <div className="open-row1">
                                    <div className="open-name">Laura Williams</div>
                                    <div className="open-reply" onClick={() => this.props.goTo("ReplyMsg", 'sent')}> Reply</div>
                                </div>
                                <div className="open-other">to Billy Kiely
                                    <div className="open-other-small"> 15 seconds Ago</div>
                                </div>
                            </div>
                        </div>
                        <div className="open-full-row-2">
                            <div>You know it is.</div>
                            <div>Burgerlord of the Rings on me.</div>
                            <div>Meet there at 6 pm?</div>
                        </div>
                    </div>
                    <div className="open-attachcnt"> 1 Attachment</div>
                    <div className="open-attachment" onClick={() => this.props.goTo("ViewAttach")}>
                        <div className="attach-icon"></div>
                        <div className="attach-text">burger-week-2013.jpg</div>
                    </div>
                    <div className="open-action-row">
                        <div className="open-action-reply" onClick={() => this.props.goTo("ReplyMsg")}> Reply</div>
                        <div className="open-action-fwd" onClick={() => this.props.goTo("FwdMsg")}> Forward</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OpenMsg;
