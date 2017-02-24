import React, {Component} from 'react';
import '../App.css';

class Inbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: false,
            msgdelete: false,
            removed: false,
            value: '',
            searchclicked: false,
            shown: true

        };
    }

    handleChange(event) {
        console.log("CHANGES HERE!");
        this.setState({value: event.target.value});
    }


    removeMsg() {
        this.setState({
            msgdelete: !this.state.msgdelete
        });
    }

    delete() {
        this.setState({
            removed: !this.state.removed
        });
        console.log("removed this message")
    }

    toggleSearch(value) {

        if (this.state.searchclicked) {
            this.setState({
                search: value
            });
        } else {
            this.setState({
                search: value,
                value: '',
                searchclicked: true
            })
        }
        console.log("Toggled search");
    }

    closeNotif() {

        this.setState({
            shown: false
        })

    }

    render() {
        return (
            <div className="Inbox">
                <div className="header">
                    <div className="header-sidebar" onClick={() => this.props.openSide(true)}>
                        <image className="fa fa-2x fa-bars" aria-hidden="true"></image>
                    </div>
                    <div className="header-title"> Inbox</div>
                    <div className="header-createmsg" onClick={ () => this.props.goTo("NewMsg")}>
                        <image className="fa fa-2x fa-pencil" aria-hidden="true"></image>
                    </div>
                </div>
                <div className="Inbox-content">
                    <div className="search">
                        <div className="search-icon" onClick={() => this.toggleSearch(true)}>
                            <image className="header-font fa fa-search"></image>
                        </div>
                        <input onClick={() => this.toggleSearch(true)} value={this.state.value}
                               onChange={this.handleChange.bind(this)}
                               className="search-input" placeholder="Search"></input>
                        { this.state.search ?
                            <div className="search-close "
                                 onClick={() => this.toggleSearch(false)}>
                                <image className="header-font-x fa fa-times"></image>
                            </div> : null }
                    </div>
                    <div className="inbox-message" onClick={() => this.props.goTo("OpenMsg")}>
                        <div className="msg-read"></div>
                        <div className="msg-inbox-container">
                            <div className="msg-row1">
                                <div className="msg-from">You, +3 others</div>
                                <div className="msg-time">14:39</div>
                            </div>
                            <div className="msg-subject">We should grab some dinner</div>
                            <div className="msg-text"> There's this great place</div>
                        </div>
                    </div>
                    { this.state.removed ? null : <div className="inbox-message">
                        <div className="msg-read"></div>
                        <div className="msg-inbox-container" onClick={() => this.removeMsg()}>
                            <div className="msg-row1">
                                <div className="msg-from">Mr. NoReply</div>
                                <div className="msg-time">14:39</div>
                            </div>
                            <div className="msg-subject">This subject is deleteable</div>
                            <div className="msg-text"> Oops don't delete me</div>
                        </div>
                        { this.state.msgdelete ?
                            <div onClick={() => this.delete()} className="inbox-delete"> Delete</div> : null }
                    </div>}
                    <div className="inbox-message" onClick={() => this.props.goTo("OpenMsg")}>
                        <div className="msg-read"></div>
                        <div className="msg-inbox-container">
                            <div className="msg-row1">
                                <div className="msg-from">Founders Fund</div>
                                <div className="msg-time">7:45</div>
                            </div>
                            <div className="msg-subject">Seed Round?</div>
                            <div className="msg-text"> Word on the grapevine...</div>
                        </div>
                    </div>
                    <div className="inbox-message" onClick={() => this.props.goTo("OpenMsg")}>
                        <div className="msg-read"></div>
                        <div className="msg-inbox-container">
                            <div className="msg-row1">
                                <div className="msg-from">Obama</div>
                                <div className="msg-time">12:00</div>
                            </div>
                            <div className="msg-subject">This is a matter of national security</div>
                            <div className="msg-text"> Yo its Bo, I told you so</div>
                        </div>
                    </div>
                    <div className="inbox-message" onClick={() => this.props.goTo("OpenMsg")}>
                        <div className="msg-read"></div>
                        <div className="msg-inbox-container">
                            <div className="msg-row1">
                                <div className="msg-from">Kay Jewelers</div>
                                <div className="msg-time">5:27</div>
                            </div>
                            <div className="msg-subject">Re: About the ring</div>
                            <div className="msg-text"> I'm sorry you would like to</div>
                        </div>
                    </div>
                    <div className="inbox-message" onClick={() => this.props.goTo("OpenMsg")}>
                        <div className="msg-read"></div>
                        <div className="msg-inbox-container">
                            <div className="msg-row1">
                                <div className="msg-from">TMCx</div>
                                <div className="msg-time">4:39</div>
                            </div>
                            <div className="msg-subject">New Events coming up!</div>
                            <div className="msg-text"> Sorry for spamming you</div>
                        </div>
                    </div>
                    <div className="inbox-message" onClick={() => this.props.goTo("OpenMsg")}>
                        <div className="msg-read"></div>
                        <div className="msg-inbox-container">
                            <div className="msg-row1">
                                <div className="msg-from">TMCx</div>
                                <div className="msg-time">4:39</div>
                            </div>
                            <div className="msg-subject">New Events coming up!</div>
                            <div className="msg-text"> Hey Fellows, Don't forget the...</div>
                        </div>
                    </div>
                    <div className="inbox-message" onClick={() => this.props.goTo("OpenMsg")}>
                        <div className="msg-read"></div>
                        <div className="msg-inbox-container">
                            <div className="msg-row1">
                                <div className="msg-from">TMCx</div>
                                <div className="msg-time">4:39</div>
                            </div>
                            <div className="msg-subject">New Events coming up!</div>
                            <div className="msg-text"> Hey Fellows, Don't forget the...</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inbox;
