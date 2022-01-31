import {
    Select, MenuItem, TextField, FormControlLabel,
    RadioGroup, Radio, Button, Typography, FormControl, FormHelperText,
} from '@material-ui/core';
import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { PropTypes } from 'prop-types';
import { Container, Grid } from '@material-ui/core';
import validate from '../../Components2/Functions/RegisterValidation'
import ValidateModal from '../../Components2/ValidateModal';
import { useForm } from 'react-hook-form';
const styles = () => ({
    root: {
        marginTop: '20px',
        // display: 'grid',
        backgroundColor: '#FEFEFE',
        fontFamily: 'Roboto',
        fontSize: '16px',
        height: '70vh',
        position: 'fixed',
        bottom: '20px',
        right: '40px',
        left: '350px',
        borderTop: '1px solid grey'
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
        disableUnderline: true,
        maxHeight: '25px',
        '&$error': {
            color: 'black'
        }

    },
    textfielddate: {
        borderRadius: '0px',
        border: '2px solid black',
        disableUnderline: true,
        maxHeight: '25px',


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
        backgroundColor: '#384859',
        // marginTop: '2.7em',
        width: '200px',
        fontSize: '16px',
        textTransform: 'none',
        borderRadius: '30px',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        marginTop: '1em',
        "&:hover": {
            backgroundColor: '#446181',
        }

    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
            transactions: [],
            //Modals and Error Handling
            errors: {},
            result: {}
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

    handleSubmit = (e) => {
        e.preventDefault()

    }
    //Send Data to Database
    sendDataToLocalStorage = (event) => {
        event.preventDefault();
        console.log(this.state);

        if (validate(this)) {
            this.setState({
                open: true,
                result: {
                    value: 'Success!',
                    style: {
                        color: 'green',
                        '@keyframes buzzout': "10% {transfor}"
                    }
                }
            })
            this.setState({ open: true })
            if (localStorage.getItem('userData') !== null) {
                console.log("existing data")
                let container = [];
                for (let i = 0; i < JSON.parse(localStorage.getItem('userData')).length; i++) {
                    container.push(JSON.parse(localStorage.getItem('userData'))[i])
                }
                console.log('Done Migrating Data')
                console.log('Pushing Current State')
                delete (this.state.errors)
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
                delete (this.state.errors)
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
                        transactions: [], // List of Transactions for the account could be another state
                        errors: {},
                        open: false,
                        result: {}
                    }
                )
        }
        else {
            console.log('Error')
            // alert('error')
            // this.handleResultChange({result:{
            //     value: 'Success!',
            //     style: {
            //        color: 'green',
            //        '@keyframes buzzout': "10% {transfor}"}
            //     }
            //  })
            this.setState({
                open: true,
                result: {
                    value: 'Error! Please resolve',
                    style: {
                        color: 'red',
                        '@keyframes buzzout': "10% {transfor}"
                    }
                }
            })

        }


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
    handleResultChange = properties => {
        this.setState({ result: properties });
    }
    handleModalChange = boolean => {
        return this.setState({ open: boolean });
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
                                value={lastname.toUpperCase()}
                                onChange={this.handleChange('lastname')}
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                className={classes.textfield}
                                fullWidth
                                required
                                {...(this.state.errors.lastname && { error: true, helperText: this.state.errors.lastname })}
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
                                value={firstname.toUpperCase()}
                                onChange={this.handleChange('firstname')}
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                {...(this.state.errors.firstname && { error: true, helperText: this.state.errors.firstname })}
                                className={classes.textfield}
                            />
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
                                value={middlename.toUpperCase()}
                                onChange={this.handleChange('middlename')}
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                {...(this.state.errors.middlename && { error: true, helperText: this.state.errors.middlename })}
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
                                {...(this.state.errors.email && { error: true, helperText: this.state.errors.email })}
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
                                {...(this.state.errors.contactnumber && { error: true, helperText: this.state.errors.contactnumber })}
                                className={classes.textfield} />
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                        <Container>
                            <Typography>Gender: </Typography>
                            <FormControl {...(this.state.errors.gender && { error: true })}>
                                <RadioGroup className={classes.radio} value={gender} onChange={this.handleChange('gender')
                                }
                                >
                                    <FormControlLabel value={'Male'} label="Male" control={<Radio />} />
                                    <FormControlLabel value={'Female'} label="Female" control={<Radio />} />
                                </RadioGroup>
                                <FormHelperText>{this.state.errors.gender}</FormHelperText>
                            </FormControl>
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
                                {...(this.state.errors.homeaddress && { error: true, helperText: this.state.errors.homeaddress })}
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
                                {...(this.state.errors.city && { error: true, helperText: this.state.errors.city })}
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
                                {...(this.state.errors.zipcode && { error: true, helperText: this.state.errors.zipcode })}
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

                                fullWidth
                                {...(this.state.errors.dateofbirth && { error: true, helperText: this.state.errors.dateofbirth })} />
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
                            <FormControl fullWidth {...(this.state.errors.accounttype && { error: true })}>
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
                                <FormHelperText style={{ color: 'red' }}>{this.state.errors.accountype}</FormHelperText>
                            </FormControl>
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
                    <Grid item xs={4}>
                        <Container className={classes.buttonContainer} maxWidth={false} fullWidth>
                            <Button className={classes.button}
                                label="Create New User"
                                variant="contained"
                                color="primary"
                                onClick={this.sendDataToLocalStorage}

                            >Create New User
                            </Button>

                        </Container>

                    </Grid>
                </Grid>

                <ValidateModal open={this.state.open} setOpen={this.handleModalChange} result={this.state.result} />

            </div>
        )
    }
}

Registerv2.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(Registerv2)

