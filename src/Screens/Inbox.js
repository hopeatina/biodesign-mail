import React, {Component} from 'react';
import '../App.css';

class Inbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: false,
            msgdelete: false,
            removed: false,
            value: 'Search'

        };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    removeMsg() {
        this.setState({
            msgdelete: !this.state.msgdelete
        });
        console.log('REMOVED MESSAGE ' +
            'and it sucks please' +
            'respect me');
    }

    delete() {
        this.setState({
            removed: !this.state.removed
        });
        console.log("removed this message")
    }

    toggleSearch() {
        this.setState({
            search: !this.state.search
        });
        console.log("Toggled search");
    }

    render() {
        return (
            <div className="Inbox">
                <div className="header">
                    <div className="header-sidebar" onClick={() => this.props.openSide(true)}>Sidebar</div>
                    <div className="header-title"> Inbox</div>
                    <div className="header-createmsg" onClick={ () => this.props.goTo("NewMsg")}>New</div>
                </div>
                <div className="Inbox-content">
                    <div className="search" onClick={() => this.toggleSearch()}>
                        <div className="search-icon"></div>
                        <input value={this.state.value} onChange={this.handleChange}
                               className="search-input"></input>
                        { this.state.search ? <div className="search-close"></div> : null }
                    </div>
                    <div className="inbox-message" onClick={() => this.props.goTo("OpenMsg")}>
                        <div className="msg-read"></div>
                        <div className="msg-inbox-container">
                            <div className="msg-row1">
                                <div className="msg-from">me, You, Her</div>
                                <div className="msg-time">14:39</div>
                            </div>
                            <div className="msg-subject">This is the subject</div>
                            <div className="msg-text"> This is sample intro text</div>
                        </div>
                    </div>
                    { this.state.removed ? null : <div className="inbox-message">
                        <div className="msg-read"></div>
                        <div className="msg-inbox-container" onClick={() => this.removeMsg()}>
                            <div className="msg-row1">
                                <div className="msg-from">Delete, You, Her</div>
                                <div className="msg-time">14:39</div>
                            </div>
                            <div className="msg-subject">This is the subject</div>
                            <div className="msg-text"> This is sample intro text</div>
                        </div>
                        { this.state.msgdelete ?
                            <div onClick={() => this.delete()} className="inbox-delete"> Delete</div> : null }
                    </div>}
                    <div className="inbox-message" onClick={() => this.props.goTo("OpenMsg")}>
                        <div className="msg-read"></div>
                        <div className="msg-inbox-container">
                            <div className="msg-row1">
                                <div className="msg-from">me, You, Her</div>
                                <div className="msg-time">14:39</div>
                            </div>
                            <div className="msg-subject">This is the subject</div>
                            <div className="msg-text"> This is sample intro text</div>
                        </div>
                    </div>
                    <div className="inbox-message" onClick={() => this.props.goTo("OpenMsg")}>
                        <div className="msg-read"></div>
                        <div className="msg-inbox-container">
                            <div className="msg-row1">
                                <div className="msg-from">me, You, Her</div>
                                <div className="msg-time">14:39</div>
                            </div>
                            <div className="msg-subject">This is the subject</div>
                            <div className="msg-text"> This is sample intro text</div>
                        </div>
                    </div>
                    <div className="inbox-message" onClick={() => this.props.goTo("OpenMsg")}>
                        <div className="msg-read"></div>
                        <div className="msg-inbox-container">
                            <div className="msg-row1">
                                <div className="msg-from">me, You, Her</div>
                                <div className="msg-time">14:39</div>
                            </div>
                            <div className="msg-subject">This is the subject</div>
                            <div className="msg-text"> This is sample intro text</div>
                        </div>
                    </div>
                    <div className="inbox-message" onClick={() => this.props.goTo("OpenMsg")}>
                        <div className="msg-read"></div>
                        <div className="msg-inbox-container">
                            <div className="msg-row1">
                                <div className="msg-from">me, You, Her</div>
                                <div className="msg-time">14:39</div>
                            </div>
                            <div className="msg-subject">This is the subject</div>
                            <div className="msg-text"> This is sample intro text</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inbox;
