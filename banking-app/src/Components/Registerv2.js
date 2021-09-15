import {
    Select, MenuItem, TextField, FormControlLabel,
    RadioGroup, Radio, Button, Typography,
} from '@material-ui/core';
import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { PropTypes } from 'prop-types';
import { Container, Grid } from '@material-ui/core';

const styles = () => ({
    root: {
        marginTop: '20px',
        // display: 'grid',
        backgroundColor: '#FEFEFE',
        fontFamily: 'Roboto',
        fontSize: '16px',
        position: 'absolute'
    },
    accountnum: {

        // flexDirection: 'row',  
        justifyContent: 'center',
        borderRadius: '0px',
        border: '2px solid black',
        disableUnderline: true,
        fontWeight: 600,
        fontFamily: 'Roboto',
        textAlign: 'center',
    },
    textfield: {
        borderRadius: '0px',
        border: '2px solid black',
        disableUnderline: true

    },
    textfielddate: {
        borderRadius: '0px',
        border: '2px solid black',
        disableUnderline: true,


    },
    radio: {
        display: "flex",
        flexDirection: "row",
    },
    select: {
        borderRadius: '0px',
        border: '2px solid black',
    }
    , selectfont: {
        fontFamily: 'Roboto',
    },
    button: {
        backgroundColor: '#686F80',
        fontSize: '16px',
        textTransform: 'none',
        borderRadius: '30px',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "&:hover": {
            backgroundColor: '#686F80',
        }

    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px'
    }
    , accountNumContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',

    }

});
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
        const { classes } = this.props;

        const
            {
                accountID, lastname,
                firstname, middlename,
                gender, contactnumber, email,
                homeaddress, zipcode, city, dateofbirth,
                accountype
            }
                = this.state


        return (
            <div className={classes.root}>
                <Grid container spacing={6}>
                    <Grid item xs={4}>
                        <Container maxWidth={"xs"}>
                            <Typography>Last Name</Typography>
                            <TextField
                                placeholder="Last Name"
                                type="text"
                                name={"last Name"}
                                id="lastname"
                                value={lastname}
                                onChange={this.handleChange('lastname')}
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.textfield}
                                fullWidth
                            />
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                        <Container maxWidth={"xs"}>
                            <Typography>First Name</Typography>
                            <TextField
                                fullWidth
                                type="text"
                                placeholder="First Name"
                                name={"first Name"}
                                id="lastname"
                                value={firstname}
                                onChange={this.handleChange('firstname')}
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.textfield} />
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                        <Container maxWidth={"xs"}>
                            <Typography>Middle Name</Typography>
                            <TextField
                                type="text"
                                fullWidth
                                placeholder="Middle Name"
                                name={"middle Name"}
                                id="middlename"
                                value={middlename}
                                onChange={this.handleChange('middlename')}
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.textfield} />
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                        <Container maxWidth={"xs"}>
                            <Typography>
                                Email
                            </Typography>
                            <TextField
                                type="email"
                                fullWidth
                                placeholder="Email"
                                name={"Email"}
                                id="email"
                                value={email}
                                onChange={this.handleChange('email')}
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.textfield} />
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                        <Container maxWidth={"xs"}>
                            <Typography>
                                Contact Number
                            </Typography>
                            <TextField
                                fullWidth
                                type="text"
                                pattern="[0-9]{11}"
                                placeholder="Contact Number"
                                name={"Contact Number"}
                                id="contactnumber"
                                value={contactnumber}
                                onChange={this.handleNumberChange}
                                InputProps={{
                                    maxLength: 11,
                                    disableUnderline: true,
                                }}
                                className={classes.textfield} />
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                        <Container>
                            <Typography>Gender: </Typography>
                            <RadioGroup className={classes.radio} value={gender} onChange={this.handleChange('gender')}>
                                <FormControlLabel value={'male'} label="Male" control={<Radio />} />
                                <FormControlLabel value={'female'} label="Female" control={<Radio />} />
                            </RadioGroup>
                        </Container>

                    </Grid>
                    <Grid item xs={6}>
                        <Container fullWidth>
                            <Typography>
                                Home Address
                            </Typography>
                            <TextField
                                fullWidth
                                type="text"
                                placeholder="Home Address"
                                name={"Home Address"}
                                id="homeaddress"
                                value={homeaddress}
                                onChange={this.handleChange('homeaddress')}
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.textfield} />
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                        <Container fullWidth>
                            <Typography>
                                City
                            </Typography>
                            <TextField
                                fullWidth
                                type="text"
                                placeholder="City"
                                name={"City"}
                                id="city"
                                value={city}
                                onChange={this.handleChange('city')}
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.textfield}
                            />
                        </Container>
                    </Grid>
                    <Grid item xs={2}>
                        <Container fullWidth>
                            <Typography>
                                Zip Code
                            </Typography>
                            <TextField
                                fullWidth
                                type="text"
                                placeholder="Zip Code"
                                name={"Zip Code"}
                                id="zipcode"
                                value={zipcode}
                                onChange={this.handleZipCodeChange}
                                InputProps={{
                                    maxLength: 4,
                                    disableUnderline: true,
                                }}
                                className={classes.textfield} />
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                        <Container maxWidth={"xs"}>
                            <Typography>
                                Date of Birth
                            </Typography>
                            <TextField
                                autoFocus={true}
                                type="date"
                                placeholder="Date of Birth"
                                name={"Date of Birth"}
                                id="dateofbirth"
                                value={dateofbirth}
                                onChange={this.handleChange('dateofbirth')}

                                InputProps={{
                                    disableUnderline: true,


                                }}
                                className={classes.textfielddate}
                                fullWidth />
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                        <Container className={classes.accountNumContainer}>
                            <Typography>Account Number</Typography>
                            <TextField
                                inputProps={{

                                    style: {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: '18px',
                                    }
                                }}
                                className={classes.accountnum}
                                InputProps={{ disableUnderline: true, }}
                                id="accountID"
                                value={accountID}

                                disabled />
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                        <Container maxWidth={"xs"}>
                            <Typography>Account Type </Typography>
                            <Select
                                className={classes.textfield}
                                value={accountype}
                                onChange={this.handleChange('accountype')}
                                disableUnderline={true}
                                fullWidth
                            >
                                <MenuItem className={classes.selectfont} value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem className={classes.selectfont} value={'Savings'}>Savings</MenuItem>
                                <MenuItem className={classes.selectfont} value={'Checking'}>Checking</MenuItem>
                            </Select>
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                        <Container>
                            <Typography>Initial Account Balance (optional)</Typography>
                            <TextField
                                type="text"
                                pattern="[0-9]{1,}"
                                fullWidth
                                placeholder="0"
                                name={"Initial Balance"}
                                id="initialbalance"
                                onChange={this.handleChange('initialbalance')}
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.textfield}

                            />
                        </Container>
                    </Grid>


                </Grid>
                <Container className={classes.buttonContainer} maxWidth={false} fullWidth>
                    <Button className={classes.button}
                        label="Create New User"
                        variant="contained"
                        color="primary"
                        onClick={this.sendDataToLocalStorage}

                    >Create New User
                    </Button>
                </Container>


            </div>
        )
    }
}

Registerv2.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(Registerv2)

