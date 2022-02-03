import React, { useState, useRef, useContext } from 'react';
import {
    Select, MenuItem, TextField, FormControlLabel,
    RadioGroup, Radio, Button, Typography, FormControl, FormHelperText,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { PropTypes } from 'prop-types';
import { Container, Grid } from '@material-ui/core';
import validate from '../../Components2/Functions/RegisterValidation'
import ValidateModal from '../../Components2/ValidateModal';
import { set, useForm } from 'react-hook-form';
import { CreateContext } from '../../Data'
import { api } from '../../Utility/API'
import { useNavigate } from 'react-router-dom'
import { parseError, createAccountID } from '../../Function/'

const styles = makeStyles(() => ({
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

}));

function Registerv3() {


    const navigate = useNavigate()
    let token = localStorage.getItem('token')
    const { state, setState, accounts, setAccounts } = useContext(CreateContext)
    const [error, setError] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { account: state }
        let headers = { Authorization: token }
        let obj = { body: data, headers: headers }
        api('accounts#create', obj).then(response => {
            let o = { headers: headers }
            api('accounts#index', o).then(response => setAccounts([...response.data])).catch(e => console.log(e.response))
            setState({ ...state, account_number: createAccountID(), account_type: '', balance: 0, last_name: '', first_name: '', middle_name: '', contact_number: '', email: '', gender: '', home_address: '', city: '', zip_code: '', birth_date: '' })
        }).catch(e => {
            setError(parseError(e.response.data.errors))
            throw new Error(e)
        }).then(r => navigate(-1)).catch(e => e)
    }
    const classes = styles();
    const handleFirstNameChange = (e) => {
        setState({ ...state, first_name: e.target.value });
    }
    const handleLastNameChange = (e) => {
        setState({ ...state, last_name: e.target.value });
    }
    const handleMiddleNameChange = (e) => {
        setState({ ...state, middle_name: e.target.value });
    }
    const handleEmailChange = (e) => {
        setState({ ...state, email: e.target.value });
    }
    const handleGenderChange = (e) => {
        setState({ ...state, gender: e.target.value })
    }
    const handleContactNumberChange = event => {
        setState({ ...state, contact_number: event.target.value })
    }
    const handleHomeAddressChange = (e) => {
        setState({ ...state, home_address: e.target.value });
    }
    const handleCityChange = (e) => {
        setState({ ...state, city: e.target.value });
    }
    const handleAccountTypeChange = (e) => {
        setState({ ...state, account_type: e.target.value });
    }
    const handleDateOfBirthChange = (e) => {
        setState({ ...state, birth_date: e.target.value });
    }
    const handleZipCodeChange = event => {
        setState({ ...state, zip_code: event.target.value });
    }
    const handleParseInt = event => {
        setState({ ...state, balance: parseInt(event.target.value) });
    }
    return <div className={classes.root}>
        <Grid container spacing={6}>
            <Grid item xs={4}>
                <Container maxWidth={"xs"}>
                    <Typography>Last Name</Typography>
                    <TextField
                        placeholder="Last Name"
                        type="text"
                        name={"last Name"}
                        id="lastname"
                        value={state.last_name}
                        onChange={(e) => handleLastNameChange(e)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        className={classes.textfield}
                        fullWidth
                        required
                        {...error?.last_name && { error: true, helperText: error.last_name }}
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
                        value={state.first_name}
                        onChange={(e) => handleFirstNameChange(e)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        {...error?.first_name && { error: true, helperText: error.first_name }}
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
                        value={state.middle_name}
                        onChange={(e) => handleMiddleNameChange(e)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        {...error?.middle_name && { error: true, helperText: error.middle_name }}
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
                        value={state.email}
                        onChange={(e) => handleEmailChange(e)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        {...error?.email && { error: true, helperText: error.email }}
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
                        value={state.contact_number}
                        onChange={(e) => handleContactNumberChange(e)}
                        InputProps={{
                            maxLength: 11,
                            disableUnderline: true,
                        }}
                        {...(error?.contact_number && { error: true, helperText: error?.contact_number })}
                        className={classes.textfield} />
                </Container>
            </Grid>
            <Grid item xs={4}>
                <Container>
                    <Typography>Gender: </Typography>
                    <FormControl >
                        <RadioGroup className={classes.radio} value={state.gender} onChange={(e) => handleGenderChange(e)
                        }
                        >
                            <FormControlLabel value={'Male'} label="Male" control={<Radio />} />
                            <FormControlLabel value={'Female'} label="Female" control={<Radio />} />
                        </RadioGroup>
                        <FormHelperText style={{ color: 'red' }}>{error?.gender}</FormHelperText>
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
                        value={state.home_address}
                        onChange={(e) => handleHomeAddressChange(e)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        // {...(state.errors.homeaddress && { error: true, helperText: state.errors.homeaddress })}
                        {...error?.home_address && { error: true, helperText: error.home_address }}
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
                        value={state.city}
                        onChange={(e) => handleCityChange(e)}
                        // {...(state.errors.city && { error: true, helperText: state.errors.city })}
                        {...error?.city && { error: true, helperText: error.city }}
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
                        value={state.zip_code}
                        onChange={(e) => handleZipCodeChange(e)}
                        // {...(state.errors.zipcode && { error: true, helperText: state.errors.zipcode })}
                        {...error?.zip_code && { error: true, helperText: error.zip_code }}
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
                        value={state.birth_date}
                        onChange={(e) => handleDateOfBirthChange(e)}

                        InputProps={{
                            disableUnderline: true,


                        }}
                        className={classes.textfielddate}

                        fullWidth
                        // {...(state.errors.dateofbirth && { error: true, helperText: state.errors.dateofbirth })} 
                        {...error?.birth_date && { error: true, helperText: error.birth_date }}
                    />
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
                        className={classes.account_number}
                        InputProps={{ disableUnderline: true, }}
                        id="accountID"
                        value={state.account_number}

                        disabled />
                </Container>
            </Grid>
            <Grid item xs={4}>
                <Container maxWidth={"xs"}>
                    <Typography>Account Type </Typography>
                    <FormControl fullWidth >
                        <Select
                            className={classes.textfield}
                            value={state.account_type}
                            onChange={(e) => handleAccountTypeChange(e)}
                            disableUnderline={true}
                            fullWidth
                        >
                            <MenuItem className={classes.selectfont} value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem className={classes.selectfont} value={'Savings'}>Savings</MenuItem>
                            <MenuItem className={classes.selectfont} value={'Checking'}>Checking</MenuItem>
                        </Select>
                        <FormHelperText style={{ color: 'red' }}>{error?.account_type}</FormHelperText>
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
                        onChange={(e) => handleParseInt(e)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        className={classes.textfield}
                        {...(error?.balance && { error: true, helperText: error?.balance })}

                    />
                </Container>
            </Grid>
            <Grid item xs={4}>
                <Container className={classes.buttonContainer} maxWidth={false} fullWidth>
                    <Button className={classes.button}
                        label="Create New User"
                        variant="contained"
                        color="primary"
                        onClick={(event) => handleSubmit(event)}

                    >Create New User
                    </Button>

                </Container>

            </Grid>
        </Grid>

    </div>
}

export default Registerv3;
