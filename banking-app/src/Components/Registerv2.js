import { Select, MenuItem, TextField, FormLabel, FormControlLabel, RadioGroup, Radio, Button } from '@material-ui/core';
import React, { Component } from 'react'





class Registerv2 extends Component {
    constructor() {
        super()
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
                }]
        }

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
    //Send Data to Database
    sendDataToLocalStorage = (event) => {
        event.preventDefault();
        console.log(this.state);
        if (localStorage.getItem('userData')) {
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
        //Set Default State to Empty
        this.setState
            (
                {
                    accountID: this.createAccountID.bind(this),
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
    handleChange = type => event => {
        this.setState({ [type]: event.target.value });
    }
    handleNumberChange = event => {
        const onlyNums = event.target.value.replace(/[^0-9]/g, '');
        if (onlyNums.length < 11) {
            this.setState({ contactnumber: event.target.value });
        }
        else if (onlyNums.length === 11) {
            const number = onlyNums.replace(/(\d{4})(\d{3})(\d{4})/, "($1)-$2-$3");
            this.setState({ contactnumber: number });
        }

    }
    handleZipCodeChange = event => {
        const onlyNums = event.target.value.replace(/[^0-9]/g, '');
        if (onlyNums.length < 4) {
            this.setState({ zipcode: event.target.value });
        }
        else if (onlyNums.length === 4) {
            const number = onlyNums.replace(/(\d{2})(\d{2})/, "$1-$2");
            this.setState({ zipcode: number });
        }
    }
    render() {
        const { accountID, lastname, firstname, middlename, gender, contactnumber, email, homeaddress, zipcode, city,dateofbirth,accountype,initialbalance } = this.state
        return (
            <>
                <TextField id="accountID" label="Account ID" value={accountID} disabled />
                <br />
                <TextField variant={'outlined'} id="lastname" label="Last Name" value={lastname} onChange={this.handleChange('lastname')} />
                <br />
                <TextField variant={'outlined'} id="firstname" label="First Name" value={firstname} onChange={this.handleChange('firstname')} />
                <br />
                <TextField variant={'outlined'} id="middlename" label="Middle Name" value={middlename} onChange={this.handleChange('middlename')} />
                <br />
                <TextField variant={'outlined'} inputProps={{ maxLength: 12 }} id="contactnumber" label="Contact Number" value={contactnumber} onChange={this.handleNumberChange} />
                <br />
                <TextField variant={'outlined'} id="email" label="Email" value={email} onChange={this.handleChange('email')} />
                <br />
                <FormLabel>Gender:</FormLabel>
                <RadioGroup value={gender} onChange={this.handleChange('gender')}>
                    <FormControlLabel value={'male'} label="Male" control={<Radio />} />
                    <FormControlLabel value={'female'} label="Female" control={<Radio />} />
                </RadioGroup>
                <br />
                <TextField variant={'outlined'} id="homeaddress" label="Home Address" value={homeaddress} onChange={this.handleChange('homeaddress')} />
                <br />
                <TextField variant={'outlined'} id="zipcode" label="Zip Code" value={zipcode} onChange={this.handleZipCodeChange} />
                <br />
                <TextField variant={'outlined'} id="city" label="City" value={city} onChange={this.handleChange('city')} />
                <br />
                <TextField variant={'standard'} id="dateofbirth" label="Date of Birth" type="date" InputLabelProps={{
                    shrink: true,
                }} value={dateofbirth} onChange={this.handleChange('dateofbirth')} />
                <br />
                <FormLabel>Account Type:</FormLabel>
                <Select value={accountype} onChange={this.handleChange('accountype')}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'savings'}>Savings</MenuItem>
                    <MenuItem value={'checking'}>Checking</MenuItem>
                </Select>
                <br />
                <TextField variant={'outlined'} id="initialbalance" label="Initial Balance" value={initialbalance} onChange={this.handleChange('initialbalance')} />
                <br />
                <Button label="Submit" variant="contained" color="primary" onClick={this.sendDataToLocalStorage}>Submit</Button>
            </>
        )
    }
}
export default Registerv2

