import { Grid } from '@material-ui/core';
import React, { Component } from 'react'

export default class Register extends Component {
    constructor() {
        super();
        // Initialize the state
        this.state =
        {
            accountID: this.createAccountID(),
            lastname: '',
            firstname: '',
            middlename: '',
            contactnumber: '',
            email: '',
            gender: '',
            homeaddress: '',
            zipcode: '',
            city: '',
            dateofbirth: '',
            accountype: '',
            initialbalance: 0,

            transactions:
                [{
                    transactionID: '',
                    transactionType: '',
                    amount: '',
                    balance: '',
                    date: '',
                    remarks: ''
                }] // List of Transactions for the account could be another state 

        }
        // Bind the handlers to this class
        this.sendDataToLocalStorage = this.sendDataToLocalStorage.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleMiddleNameChange = this.handleMiddleNameChange.bind(this);
        this.handleContactNumberChange = this.handleContactNumberChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        // this.handleAddressChange = this.handleAddressChange.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.createAccountID = this.createAccountID.bind(this);
        this.handleHomeAddressChange = this.handleHomeAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
        this.handleDateOfBirthChange = this.handleDateOfBirthChange.bind(this);
        this.handleAccountTypeChange = this.handleAccountTypeChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
       
    }
    // Send the data to local storage
    sendDataToLocalStorage(event) {
        event.preventDefault();
        console.log(this.state);
        // let data = JSON.stringify(this.state);
        // const userDataContainer = [];
        // userDataContainer.push(data);
        if (localStorage.getItem('userData')) {
            // let userData = JSON.parse(localStorage.getItem('userData'))
            // const combinedData = { JSON.stringify(...userData), JSON.stringify(...this.state) };
            // localStorage.setItem('userData', JSON.stringify(combinedData));
            if (JSON.parse(localStorage.getItem('userData')).length >= 2) {
                const container = [];
                console.log('Data is already present');
                for (let i = 0; i < JSON.parse(localStorage.getItem('userData')).length; i++) {

                    container.push(JSON.parse(localStorage.getItem('userData'))[i]);
                }
                container.push(this.state);
                localStorage.setItem('userData', JSON.stringify(container));

            }
            else {
                const container = [];
                container.push(JSON.parse(localStorage.getItem('userData')))
                container.push(this.state)
                localStorage.setItem('userData', JSON.stringify(container));

            }
        }


        else {
            localStorage.setItem('userData', JSON.stringify(this.state));

        }

        this.setState
            (
                {
                    accountID: this.createAccountID(),
                    lastname: '',
                    firstname: '',
                    middlename: '',
                    contactnumber: '',
                    email: '',
                    gender: '',
                    homeaddress: '',
                    zipcode: '',
                    city: '',
                    dateofbirth: '',
                    accountype: '',
                    initialbalance: 0,
                    transactions:
                        [{
                            transactionID: '',
                            transactionType: '',
                            amount: '',
                            balance: '',
                            date: '',
                            remarks: ''
                        }] // List of Transactions for the account could be another state 

                }
            )
    }
    //Create Account ID
    createAccountID() {
        let date = new Date();
        let day = date.getDate().toString();
        let fullyear = date.getFullYear().toString();
        let month = (date.getMonth() + 1).toString();
        const accountNumber = () => {
            let randomAccountNumber = Math.floor(Math.random() * 1000000).toString();
            if (randomAccountNumber.length < 6) {
                randomAccountNumber = "0" + randomAccountNumber;
            }
            return randomAccountNumber;

        }

        let accountID = fullyear + month + day + accountNumber();
        return accountID;

    }


    // Handle the change in the input field
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
    handleHomeAddressChange(event) {
        this.setState({ homeaddress: event.target.value });
    }
    handleCityChange(event) {
        this.setState({ city: event.target.value });
    }
    handleZipCodeChange(event) {
        this.setState({ zipcode: event.target.value });
    }
    changeValue(event) {
        this.setState({ initialbalance: event.target.value });
    }
    handleGenderChange(event) {
        this.setState({
            gender: event.target.value
        }
        )
    }
    handleDateOfBirthChange(event){
        this.setState
        (
            {
                dateofbirth: event.target.value
            }
        )
    }
    handleAccountTypeChange(event){
        this.setState
        (
            {
                accountype: event.target.value
            }
        )
    }



    //React Life Cycle
    componentDidMount() {
        console.log("Component Mounted");
    }

    componentDidUpdate() {
        console.log("Component Updated");
    }

    // Render the component
    render() {
        return (
            <div>
             
                <form onSubmit={this.sendDataToLocalStorage}>
                
                    
                    <label>Account ID:</label>
                    <input type="text" value={this.state.accountID} disabled />
                  
                    
                    
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
                    <input type="tel" name="contactnumber" value={this.state.contactnumber} onChange={this.handleContactNumberChange} maxLength={15} />
                    <br />

                    <label>Email:</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} />
                    <br />

                    <label>Home Address:</label>
                    <input type="text" name="homeaddress" value={this.state.homeaddress} onChange={this.handleHomeAddressChange} />
                    <br />

                    <label>Gender:</label>
                    <br />
                    <label for="male">Male</label>
                    <input type="radio" id="male" name="male" value={"Male"} checked={this.state.gender === "Male"} onChange={this.handleGenderChange}/>
                    <br/>
                    <label for="female">Female</label>
                    <input type="radio" id="female" name="female" value={"Female"} checked={this.state.gender === "Female"} onChange={this.handleGenderChange}/>
                    <br/>

                    <label>City:</label>
                    <input type="text" name="city" value={this.state.city} onChange={this.handleCityChange} />
                    <br />

                    <label>Zip Code:</label>
                    <input type="text" name="zipcode" value={this.state.zipcode} onChange={this.handleZipCodeChange} maxLength={4} />
                    <br />

                    <label>Date of Birth:</label>
                    <input   type="date" name="birthdate" value={this.state.dateofbirth} onChange={this.handleDateOfBirthChange} />
                    <br />

                    <label>Account Type:</label>
                    <select name="accounttype" value={this.state.accounttype} onChange={this.handleAccountTypeChange}placeholder={'Please Choose'}>
                        <option value="Please Choose">Please Choose</option>
                        <option value="Savings">Savings</option>
                        <option value="Current">Current</option>
                    </select>

                    <label>InitialBalance:</label>
                    <input type="number" name="initialbalance" value={this.state.initialbalance} onChange={this.changeValue} />
                    <br />

                    <button onSubmit={this.sendDataToLocalStorage}>Submit</button>
                </form>
              
            </div>
        )
    }
}
