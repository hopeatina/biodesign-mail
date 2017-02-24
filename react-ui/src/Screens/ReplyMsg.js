import React, {Component} from 'react';
import '../App.css';

class ReplyMsg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subjvalue: ' ',
            ccvalue: ' ',
            tovalue: ' ',
            bigvalue: ' ',
            showto: false,
            showchip: false
        };
    }

    handleBigChange(event) {
        this.setState({bigvalue: event.target.value});
    }

    handleToChange(event) {
        this.setState({tovalue: event.target.value});
    }

    handleCcChange(event) {
        this.setState({ccvalue: event.target.value});
    }

    handleSubjChange(event) {
        this.setState({subjvalue: event.target.value});
    }

    toggleSelection(choice) {

        if (choice == 'show') {
            this.setState({
                showto: true
            });
        }
        if (choice == 'close') {
            this.setState({
                showto: false
            })
        } else {
            this.setState({
                showto: !this.state.showto
            })
        }
    }

    showChip() {
        this.setState({
            showchip: true,
            showto: false
        })
    }

    hideChip() {
        this.setState({
            showchip: false
        })
    }

    render() {
        return (
            <div className="ReplyMsg">
                <div className="header">
                    <div className="header-close" onClick={() => this.props.goTo(null)}> Back</div>
                    <div className="header-send" onClick={() => this.props.goTo("Inbox")}> Send</div>
                </div>
                <div className="NewMsg-content">
                    <div className="msg-row" onClick={() => this.toggleSelection('open')}>
                        <div className="create-front"> To:</div>
                        { this.state.showchip ?
                            <div onClick={ () => this.hideChip()} className="contact-chip"> Premal </div> : null }
                        <input value={this.state.tovalue} onChange={this.handleToChange.bind(this)}
                               className="contact-input"></input>
                        <div className="attach" onClick={() => this.toggleSelection('')}> +</div>
                    </div>
                    { this.state.showto ?
                        <div className="msg-contacts" onClick={() => this.toggleSelection('close')}>
                            <div className="msg-contact-item" onClick={ () => this.showChip()}>
                                <img className="msg-contact-icon"
                                     src="http://www.tmc.edu/innovation/wp-content/uploads/sites/4/2016/04/Premal-Kamdar--250x250.jpg"></img>
                                <div className="msg-contact-col2">
                                    <div className="msg-contact-name"> Premal</div>
                                    <div className="msg-contact-email"> premal@gmail.com</div>
                                </div>
                            </div>
                            <div className="msg-contact-item" onClick={ () => this.showChip()}>
                                <img className="msg-contact-icon"
                                     src="http://www.tmc.edu/innovation/wp-content/uploads/sites/4/2016/04/Victor-Bornstein--250x250.png"></img>
                                <div className="msg-contact-col2">
                                    <div className="msg-contact-name"> Victor</div>
                                    <div className="msg-contact-email"> victor@gmail.com</div>
                                </div>
                            </div>

                        </div> : null}

                    <div className="msg-row">
                        <div className="create-front"> Cc/Bcc:</div>
                        <input value={this.state.ccvalue} onChange={this.handleCcChange.bind(this)}
                               className="create-input"></input>
                    </div>
                    <div className="msg-row">
                        <div className="create-front"> Subject:</div>
                        <input type="text" name="Subject" title="Subject" value={this.state.subjvalue}
                               onChange={this.handleSubjChange.bind(this)}
                               className="create-input"></input>
                        <div className="attach" onClick={() => this.props.goTo("AttachPhoto")}>
                            <div className="fa fa-paperclip"></div>
                        </div>
                    </div>
                    { this.props.showAttach ? <div className="NewMsg-attachment">
                        <div className="attached-pic"></div>
                        <div className="attached-col2">
                            <div className="attach-row">wallpaper.png - 32.9K</div>
                            <div className="attach-row">Attached</div>
                        </div>
                        <div onClick={() => this.props.removeAttachment() } className="attach-x">X</div>
                    </div> : null }
                    <textarea value={this.state.bigvalue} onChange={this.handleBigChange.bind(this)}
                              className="msg-previous"></textarea>
                </div>
            </div>
        );
    }
}

export default ReplyMsg;
