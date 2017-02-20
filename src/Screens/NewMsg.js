import React, {Component} from 'react';
import '../App.css';

class NewMsg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subjvalue: ' ',
            ccvalue: ' ',
            tovalue: ' ',
            showto: false,
            showchip: false
        };
    }

    handleToChange(event) {
        console.log(event);
        this.setState({tovalue: event.target.value});
    }

    handleCcChange(event) {
        console.log(event);
        this.setState({ccvalue: event.target.value});
    }

    handleSubjChange(event) {
        console.log(event);
        this.setState({subjvalue: event.target.value});
    }

    toggleSelection(choice) {

        if (choice == 'show')
        {
            this.setState({
                showto: true
            });
        } if (choice == 'close') {
            this.setState({
                showto: false
            })
        } else{
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
            <div className="NewMsg">
                NewMsg
                <div className="header">
                    <div className="header-close" onClick={() => this.props.goTo("Inbox")}> Close</div>
                    <div className="header-send" onClick={() => this.props.goTo("Inbox")}> Send</div>
                </div>
                <div className="NewMsg-content">
                    <div className="msg-row" onClick={() => this.toggleSelection('open')}>
                        <div className="create-front"> To:</div>
                        { this.state.showchip ?
                            <div onClick={ () => this.hideChip()} className="contact-chip"> Person 1</div> : null }
                        <input value={this.state.tovalue} onChange={this.handleToChange}
                               className="contact-input"></input>
                        <div className="attach" onClick={() => this.toggleSelection('')}> +</div>
                    </div>
                    { this.state.showto ?
                        <div className="msg-contacts" onClick={() => this.toggleSelection('close')}>
                            <div className="msg-contact-item" onClick={ () => this.showChip()}>
                                <div className="msg-contact-icon"></div>
                                <div className="msg-contact-col2">
                                    <div className="msg-contact-name"> Person 1</div>
                                    <div className="msg-contact-email"> person1@gmail.com</div>
                                </div>
                            </div>
                            <div className="msg-contact-item" onClick={ () => this.showChip()}>
                                <div className="msg-contact-icon"></div>
                                <div className="msg-contact-col2">
                                    <div className="msg-contact-name"> Person 1</div>
                                    <div className="msg-contact-email"> person1@gmail.com</div>
                                </div>
                            </div>

                        </div> : null}

                    <div className="msg-row">
                        <div className="create-front"> Cc/Bcc:</div>
                        <input value={this.state.ccvalue} onChange={this.handleCcChange}
                               className="create-input"></input>
                    </div>
                    <div className="msg-row">
                        <div className="create-front"> Subject:</div>
                        <input value={this.state.subjvalue} onChange={this.handleSubjChange}
                               className="create-input"></input>
                        <div className="attach" onClick={() => this.props.goTo("AttachPhoto")}>Attach</div>
                    </div>
                    <div className="msg-previous">
                        That works!
                    </div>

                </div>
            </div>
        );
    }
}

export default NewMsg;
