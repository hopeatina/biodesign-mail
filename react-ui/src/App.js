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
import SideContent from './Screens/SideBar'


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
            current: <div className="wrap-div">
                <Inbox openSide={this.onSetSidebarOpen.bind(this)} goTo={this.goTo.bind(this)}/>
            </div>,
            previous: null,
            sidebarOpen: false,
            subjvalue: ' '
        };
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    removeAttachment() {
        this.goTo("NewMsg", false);
    }

    // handleSubjChange = (event) => {
    //     value={this.state.subjvalue}
    //     handlers={this.handleSubjChange}
    //     this.setState({subjvalue: event.target.value});
    // };

    goTo(page, data) {
        var selected = null;
        switch (page) {
            case "OpenMsg":
                selected = <div className="wrap-div"><OpenMsg goTo={this.goTo.bind(this)}/></div>;
                break;
            case "Inbox":
                selected = <div>
                    <Inbox openSide={this.onSetSidebarOpen.bind(this)} goTo={this.goTo.bind(this)}/></div>;
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
            previous: this.state.current
        })
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
