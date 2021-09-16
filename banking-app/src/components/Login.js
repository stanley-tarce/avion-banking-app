import React, { useState } from 'react'
import { Divider, InputAdornment, makeStyles, TextField, withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import chart from '../assets/login/chart.svg';
import contract from '../assets/login/contract.svg';
import dollarSymbol from '../assets/login/dollarSymbol.svg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Asset from '../assets/login/Asset.svg';
import GoogleLogo from '../assets/login/GoogleLogo.svg';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'lightcoral'
    },
    appInfo: {
        height: '85%',
        width: '50%',
        backgroundColor: '#384859',
        position: 'absolute',
        top: '5%',
        left: '10%',
        borderTopLeftRadius: '12px',
        borderBottomLeftRadius: '12px'
    },
    image: {
        maxHeight: '140px',
        maxWidth: '140px',
        color: 'white'
    },
    mainText: {
        marginTop: '2.4em',
        color: 'white',
        fontSize: '2.15rem',
        fontWeight: '500'
    },
    login: {
        height:'85%',
        width:'30%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        top: '5%',
        right: '10%',
        borderTopRightRadius: '12px',
        borderBottomRightRadius: '12px'
    },
    form: {
        height: '60vh',
        width: '60%',
        marginTop: '35%',
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        border: 'none',
        color: 'white',
        backgroundColor: '#384859',
        height: '48px',
        width: '164px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        fontSize: '1rem',
        cursor: 'pointer'
    },
    span: {
        backgroundColor: 'black',
        padding: '0 50px'
    },
    circle: {
        height: '0.9rem',
        width: '0.9rem',
        color: 'white',
        margin: '0 1rem'
    },
    passIcon: {
        position: 'absolute',
        top: '20%',
        right: '20%'
    }
})


const Login = (props) => {
    const classes = useStyles();
    const [values, setValues] = useState({
        userName: '',
        password: '',
        showPassword: false
    });

    const admins = {
        userName: 'admin1',
        passCode: 'adminpass'
    }

    const [user, setUser] = useState('');

    const userInput = (e) => {
        setUser(e.target.value)
    }

    /****** functions for handling input password ******/

    const handleChange = (props) => (event) => {
        setValues({...values, [props]: event.target.value})
    }

    const handleShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    }

    const handleMouseDown = (e) => {
        e.preventDefault();
    }

    /***** handling sign in of user ******/
    const signIn = (e) => {
        e.preventDefault();
        
        if(user === admins.userName && values.password === admins.passCode) {
            props.showLogin(false)
            props.showMain(true)
        } else console.log('not accepted')
        
    }

    return (
        <div
        className={classes.root}>
            <div
            style={{
                display: 'flex',
                width: '80vh',
                height: '80%'
            }}>
                <div
                className={classes.appInfo}>
                    <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '63%',
                        margin: '25% auto 0 auto'
                    }}>
                        <img 
                        className={classes.image}
                        src={chart} 
                        alt="chart" />
                        <img 
                        className={classes.image}
                        style={{paddingLeft: '1.95rem'}}
                        src={contract} 
                        alt="contract" />
                        <img 
                        className={classes.image}
                        src={dollarSymbol} 
                        alt="dollarSymbol" />
                    </div>
                    <h2
                    className={classes.mainText}>
                        Easy Client financial handling
                    </h2>
                    <p
                    style={{
                        width: '35%',
                        margin: '0 auto',
                        color: 'white',
                        fontWeight: 'lighter',
                        fontSize: '1.2rem'
                    }}>
                        Step right up and take a look, it's time for Yamishibai!
                    </p>
                    <div
                    style={{
                        marginTop: '6em'
                    }}>
                        <div
                        style={{
                            height: '0.65rem', 
                        width: '1.8rem', 
                        backgroundColor: 'white',
                        borderRadius: '32.5px',
                        position: 'absolute',
                        bottom: '15%',
                        left: '43.7%'}}></div>
                        <FiberManualRecordIcon className={classes.circle} />
                        <FiberManualRecordIcon className={classes.circle} />
                        <FiberManualRecordIcon className={classes.circle} />
                    </div>
                </div>
                <div
                className={classes.login}>
                    <img src={Asset} 
                    alt="logo"
                    style={{
                        position: 'absolute',
                        height: '78px',
                        width: '182px',
                        top: '36px',
                        left: '35px'
                    }} />
                    <button
                    className='createAccountBtn'
                    style={{
                        position: 'absolute',
                        top: '59px',
                        right: '35px',
                        width: '127px',
                        height: '37px',
                        border: '1px solid #384859',
                        /* backgroundColor: 'white', */
                        /* color: '#384859', */
                        cursor: 'pointer',
                        borderRadius: '3px'
                    }}>Create Account</button>
                    <form 
                    className={classes.form}
                    action="">
                        <label
                        style={{
                            textAlign:'start',
                            fontSize: '1.6rem',
                            fontWeight: '500',
                            color: '#183346'}}
                        >Welcome to Yamishibai!</label>
                        <TextField
                            type='text'
                            label='Username'
                            defaultValue={user}
                            onChange={userInput}
                            style={{
                                marginTop: '3rem',
                            }}
                            required />
                        <TextField
                            id='standard-password'
                            type={values.showPassword ? 'text' : 'password'}
                            label='Password'
                            value={values.password}
                            style={{
                                marginTop: '2rem',
                                borderColor: 'green'
                            }}
                            onChange={handleChange('password')}
                            InputProps={{
                                endAdornment:(
                                    <InputAdornment position='end'> 
                                        <IconButton 
                                        onClick={handleShowPassword}
                                        onMouseDown={handleMouseDown}>
                                            {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            required />
                            <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: '2.9em'
                            }}>
                                <button
                                className={classes.button}
                                onClick={signIn}
                                >Sign in 
                                <ArrowForwardIcon
                                    style={{
                                        height: '22px',
                                    }} /></button>
                                <h5
                                className='forgotPass'
                                style={{
                                    fontWeight: 'lighter',
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    userSelect: 'none'
                                }}>Forgot password?</h5>
                            </div>
                            <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                paddingTop: '2.4em'
                            }}>
                                <div 
                                className='Or'
                                style={{
                                    userSelect: 'none'
                                }}>or</div>
                            </div>
                            <div
                            className='GoogleButton'
                            style={{
                                height: '52px',
                                width: '296px',
                                margin: '2.5em auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                <img 
                                style={{ paddingRight: '1rem'}}
                                src={GoogleLogo} 
                                alt="google-logo" 
                                /> Sign in with Google
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Login
