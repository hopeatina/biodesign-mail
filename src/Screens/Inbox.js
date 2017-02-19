import React, {Component} from 'react';
import '../App.css';

class Inbox extends Component {
    removeMsg() {
        console.log('REMOVED MESSAGE SON');
    }

    toggleSearch() {
        console.log("Toggled search SON");
    }

    render() {
        return (
            <div className="Inbox">
                Inbox is here.
                <div className="header">
                    <div className="header-sidebar" onClick={() => this.props.openSide(true)}>Sidebar Icon</div>
                    <div className="header-title"> Inbox</div>
                    <div className="header-createmsg" onClick={ () => this.props.goTo("NewMsg")}>Create Msg</div>
                </div>
                <div className="search" onClick={() => this.toggleSearch()}>Search</div>
                <div className="inbox-message" onClick={() => this.props.goTo("OpenMsg")}>Open Message</div>
                <div className="inbox-message" onClick={() => this.removeMsg()}>Archive/Delete</div>
            </div>
        );
    }
}

export default Inbox;
