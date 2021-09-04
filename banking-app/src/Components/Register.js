import React, { Component } from 'react'

export default class Register extends Component {
    constructor() {
        super();
        this.state =
        {
            lastname: '',
            firstname: '',
            middlename: '',
            contactnumber: '',
            email: '',
            address: '',
            initialbalance: 0,
        }
        this.sendDataToLocalStorage = this.sendDataToLocalStorage.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleMiddleNameChange = this.handleMiddleNameChange.bind(this);
        this.handleContactNumberChange = this.handleContactNumberChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.changeValue = this.changeValue.bind(this);

    }
    sendDataToLocalStorage(e) {
        e.preventDefault();
        console.log(this.state);
    }

    handleLastNameChange(event) {
        this.setState({ lastname: event.target.value });
    }
    handleFirstNameChange(event) {
        this.setState({ firstname: event.target.value });
    }
    handleMiddleNameChange(event) {
        this.setState({ middlename: event.target.value });
    }
    handleContactNumberChange(event) {
        this.setState({ contactnumber: event.target.value });
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handleAddressChange(event) {
        this.setState({ address: event.target.value });
    }
    changeValue(event) {
        this.setState({ initialbalance: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.sendDataToLocalStorage}>
                    <label>LastName:</label>
                    <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleLastNameChange} />
                    <br />
                    <label>FirstName:</label>
                    <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleFirstNameChange} />
                    <br />
                    <label>MiddleName:</label>
                    <input type="text" name="middlename" value={this.state.middlename} onChange={this.handleMiddleNameChange} />
                    <br />
                    <label>ContactNumber:</label>
                    <input type="text" name="contactnumber" value={this.state.contactnumber} onChange={this.handleContactNumberChange} />
                    <br />
                    <label>Email:</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} />
                    <br />
                    <label>Address:</label>
                    <textarea name="address" value={this.state.address} onChange={this.handleAddressChange} />
                    <br />
                    <label>InitialBalance:</label>
                    <input type="number" name="initialbalance" value={this.state.initialbalance} onChange={this.changeValue} />
                    <br />
                    <button onSubmit={this.sendDataToLocalStorage}>Submit</button>
                </form>
            </div>
        )
    }
}
