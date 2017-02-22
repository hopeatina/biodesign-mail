import React, {Component} from 'react';
import '../App.css';

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="side-header"> MAILBOXES</div>
                <div className="side-item"> Inbox</div>
                <div className="side-item"> Sent</div>
                <div className="side-item"> Pinned</div>
                <div className="side-item"> Drafts</div>
                <div className="side-item"> Trash</div>
                <div className="side-header"> GROUPS </div>
                <div className="side-item"> All mail</div>
                <div className="side-item"> Spam</div>
                <div className="side-item"> Project Foo</div>
                <div className="side-item"> Project Bar</div>
                <div className="side-header"> MARKED </div>
                <div className="side-item"> Important </div>
                <div className="side-item"> Personal</div>
                <div className="side-item"> Work</div>
                <div className="side-item"> Travel</div>
            </div>
        );
    }
}

export default SideBar;
