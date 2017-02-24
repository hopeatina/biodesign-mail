import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Inbox from './Screens/Inbox';
import AttachPhoto from './Screens/AttachPhoto';
import OpenMsg from './Screens/OpenMsg';
import NewMsg from './Screens/NewMsg';
import FwdMsg from './Screens/FwdMsg';
import MoveMsg from './Screens/MoveMsg';
import Preview from './Screens/Preview';
import ReplyMsg from './Screens/ReplyMsg';
import ViewAttach from './Screens/ViewAttach';
var Sidebar = require('react-sidebar').default;
import SideContent from './Screens/SideBar';
import Splash from './Screens/Splash';


const sidestyles = {
    root: {zIndex: 5},
    content: {zIndex: 5},
    sidebar: {zIndex: 5},
    overlay: {zIndex: 5},
    dragHandle: {zIndex: 5},
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // current: <Splash/>,
            current: <div className="wrap-div">
                <Inbox openSide={this.onSetSidebarOpen.bind(this)} goTo={this.goTo.bind(this)}/>
            </div>,
            previous: null,
            sidebarOpen: false,
            subjvalue: ' ',
            inboxnotif: null,
            closed: true,
            inputdata: null
        };

        this.closeNotif = this.closeNotif.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    removeAttachment() {
        this.goTo("NewMsg", false);
    }

    checkMessage(data) {

        var message = null;
        switch (data) {
            case 'archive':
                message = 'Your message was archived';
                break;
            case 'delete':
                message = 'Your message was deleted';
                break;
            case 'sent':
                message = 'Your message was sent';
                break;
            case 'move':
                message = 'Conversation has been moved';
                break;
            case 'spam':
                message = 'Your message was marked as spam';
                break;
            case 'read':
                message = 'Conversation marked as unread';
                break;
            default :
                message = null;
        }
        console.log("message and state updated");

        return message;
    }

    closeNotif() {

        this.setState({
            closed: false
        });
        console.log(this.state.closed);
    }

    handleNotif(message) {
        console.log(message);
        return (message != null ) ?
            <div className="inbox-notif">
                <div className="inbox-notif-text">{message}</div>
                <div className="inbox-notif-icon" onClick={() => this.goTo("Inbox", null)}>
                    <image className="fa fa-times" aria-hidden="true"></image>
                </div>
            </div> : null;
    }
//     saveFwdData(){
//         var curstate = this.refs.fwd.getState();
//         this.setState({
//             inputdata: curstate
//         )};
// }

    goTo(page, data) {
        var selected = null;
        switch (page) {
            case "OpenMsg":
                selected = <div className="wrap-div"><OpenMsg goTo={this.goTo.bind(this)}/></div>;
                break;
            case "Inbox":
                var message = this.checkMessage(data);

                selected = <div>
                    <Inbox closeNotif={this.closeNotif.bind(this)} msg={data}
                           openSide={this.onSetSidebarOpen.bind(this)} goTo={this.goTo.bind(this)}/>
                    { this.handleNotif(message)  }
                </div>;
                break;
            case "AttachPhoto":
                selected = <div className="wrap-div"><AttachPhoto goTo={this.goTo.bind(this)}/></div>;
                break;
            case "FwdMsg":
                selected = <div className="wrap-div"><FwdMsg goTo={this.goTo.bind(this)}/></div>;
                break;
            case "MoveMsg":
                selected = <div className="wrap-div"><MoveMsg goTo={this.goTo.bind(this)}/></div>;
                break;
            case "NewMsg":
                selected =
                    <div className="wrap-div"><NewMsg
                        removeAttachment={this.removeAttachment.bind(this)}
                        showAttach={data} goTo={this.goTo.bind(this)}/></div>;
                break;
            case "Preview":
                selected = <div className="wrap-div"><Preview goTo={this.goTo.bind(this)}/></div>;
                break;
            case "ReplyMsg":
                selected = <div className="wrap-div"><ReplyMsg goTo={this.goTo.bind(this)}/></div>;
                break;
            case "ViewAttach":
                selected = <div className="wrap-div"><ViewAttach goTo={this.goTo.bind(this)}/></div>;
                break;
            default:
                selected = this.state.previous;
        }
        this.setState({
            current: selected,
            previous: this.state.current,
            closed: true
        });

        console.log(this.state);
    }

    checkPage() {
        return this.state.current;
    }


    render() {
        var sidebarContent = <SideContent/>;
        return (
            <div className="App">

                <Sidebar className="sidebar" sidebar={sidebarContent}
                         open={this.state.sidebarOpen}
                         onSetOpen={this.onSetSidebarOpen.bind(this)}>
                    {this.checkPage() }
                </Sidebar>

            </div>
        );
    }
}

export default App;
