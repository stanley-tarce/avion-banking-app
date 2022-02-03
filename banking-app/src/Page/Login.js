
// import GoogleSignUp from './GoogleSignUp';
import React, { useState, useContext } from 'react'
import { InputAdornment, makeStyles, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import chart from '../assets/login/chart.svg';
import contract from '../assets/login/contract.svg';
import dollarSymbol from '../assets/login/dollarSymbol.svg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Asset from '../assets/login/Asset.svg';
import GoogleLogo from '../assets/login/GoogleLogo.svg';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { CreateContext } from '../Data'
import { api } from '../Utility/API'

const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#384859"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#384859"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#384859"
        },
        "& .MuiOutlinedInput-input": {
            color: "#384859"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "#384859"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#384859"
        },
        "& .MuiInputLabel-outlined": {
            color: "#384859"
        },
        "&:hover .MuiInputLabel-outlined": {
            color: "#384859"
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#384859"
        },
        display: 'flex',
        height: '100vh',
        width: '100vw',
        background: '#aa4b6b',  /* fallback for old browsers */
        // eslint-disable-next-line no-dupe-keys
        background: 'linear-gradient(to right, #8e9eab, #eef2f3)'

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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '2.15rem',
        fontWeight: '500'
    },
    login: {
        height: '85%',
        width: '30%',
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
    }, visibileIcons: {
        height: '24px',
        width: '24px'
    }
})


const Login = (props) => {
    const navigate = useNavigate()
    const classes = useStyles();
    const [values, setValues] = useState({
        userName: '',
        password: '',
        showPassword: false
    });


    // const [user, setUser] = useState('');



    /****** functions for handling input password ******/

    const handleChange = (props) => (event) => {
        setValues({ ...values, [props]: event.target.value })
    }

    const handleShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    }

    const handleMouseDown = (e) => {
        e.preventDefault();
    }
    const { setToken } = useContext(CreateContext)
    /***** handling sign in of user ******/
    const signIn = (e) => {
        e.preventDefault();
        let data = {
            body: {
                user: {
                    email: values.userName,
                    password: values.password
                }
            }

        }
        api('devise#login', data).then(res => {
            localStorage.setItem('token', res.headers.authorization)
            setToken(res.headers.authorization)
        }).finally(r => navigate('/'))

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
                            style={{ paddingLeft: '1.95rem' }}
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
                        onSubmit={signIn}
                        className={classes.form}
                        action="">
                        <label
                            style={{
                                with: '100%',
                                textAlign: 'start',
                                fontSize: '1.5rem',
                                fontWeight: '500',
                                color: '#183346'
                            }}
                        >Welcome to Yamishibai!</label>
                        <TextField
                            type='text'
                            label='Username'

                            onChange={handleChange('userName')}
                            variant='outlined'
                            style={{
                                marginTop: '3rem',
                            }}
                            required />
                        <TextField
                            id='standard-password'
                            type={values.showPassword ? 'text' : 'password'}
                            label='Password'
                            value={values.password}
                            variant='outlined'
                            style={{
                                marginTop: '2rem',
                                borderColor: 'green'
                            }}
                            onChange={handleChange('password')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton
                                            className={classes.visibileIcons}
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
                                onClick={(e) => signIn(e)}
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
                                margin: '1em auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                            <img
                                style={{ paddingRight: '1rem' }}
                                src={GoogleLogo}
                                alt="google-logo"
                            />
                        </div>
                    </form>
                </div>
            </div>




        </div>
    )
}


export default Login
