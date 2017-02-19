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


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: <div>
                <Inbox openSide={this.onSetSidebarOpen.bind(this)} goTo={this.goTo.bind(this)}/>
            </div>,
            previous: null,
            sidebarOpen: false
        };
        console.log("App started for use by user blah");
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    goTo(page) {
        var selected = null;
        switch (page) {
            case "OpenMsg":
                selected = <OpenMsg goTo={this.goTo.bind(this)}/>;
                break;
            case "Inbox":
                selected = <div>
                    <Inbox openSide={this.onSetSidebarOpen.bind(this)} goTo={this.goTo.bind(this)}/></div>;
                break;
            case "AttachPhoto":
                selected = <AttachPhoto goTo={this.goTo.bind(this)}/>;
                break;
            case "FwdMsg":
                selected = <FwdMsg goTo={this.goTo.bind(this)}/>;
                break;
            case "MoveMsg":
                selected = <MoveMsg goTo={this.goTo.bind(this)}/>;
                break;
            case "NewMsg":
                selected = <NewMsg goTo={this.goTo.bind(this)}/>;
                break;
            case "Preview":
                selected = <Preview goTo={this.goTo.bind(this)}/>;
                break;
            case "ReplyMsg":
                selected = <ReplyMsg goTo={this.goTo.bind(this)}/>;
                break;
            case "ViewAttach":
                selected = <ViewAttach goTo={this.goTo.bind(this)}/>;
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
        var sidebarContent = <b>Sidebar content</b>;
        return (
            <div className="App">

                <Sidebar sidebar={sidebarContent}
                         open={this.state.sidebarOpen}
                         onSetOpen={this.onSetSidebarOpen.bind(this)}>
                    {this.checkPage() }
                </Sidebar>

            </div>
        );
    }
}

export default App;
