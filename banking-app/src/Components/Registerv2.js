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
            transactions: []
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
        if (localStorage.getItem('userData') !== null) {
            console.log("existing data")
            let container = [];
            for (let i = 0; i < JSON.parse(localStorage.getItem('userData')).length; i++) {
                container.push(JSON.parse(localStorage.getItem('userData'))[i])
            }
            console.log('Done Migrating Data')
            console.log('Pushing Current State')
            container.push(this.state)
            console.log('Done Pushing Current State')
            console.log('Parsing Initial Balance')
            for (let i = 0; i < container.length; i++) {
                container[i].initialbalance = parseInt(container[i].initialbalance);
            }
            localStorage.setItem('userData', JSON.stringify(container));

        }
        else {
            let container = [];
            container.push(this.state);
            localStorage.setItem('userData', JSON.stringify(container));
        }
        //Set Default State to Empty
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
                    transactions: [] // List of Transactions for the account could be another state 
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
    handleParseInt = event => {
        this.setState({ initialbalance: parseInt(event.target.value) });
    }



    render() {
        const 
        { 
            accountID, lastname, 
            firstname, middlename, 
            gender, contactnumber, email, 
            homeaddress, zipcode, city, dateofbirth, 
            accountype, initialbalance 
        } 
            = this.state

        
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

