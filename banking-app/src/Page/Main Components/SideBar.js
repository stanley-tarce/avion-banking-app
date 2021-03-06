import React, { useState, useEffect, } from 'react'
import Card from '@material-ui/core/Card'
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles'
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import CreditCardSharpIcon from '@material-ui/icons/CreditCardSharp';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SettingsIcon from '@material-ui/icons/Settings';
import YsLogo from '../../assets/YsWhite.svg';
import { useNavigate, useLocation } from 'react-router-dom'


const theme = createTheme({
    typography: {
        h6: {
            fontWeight: 600
        },
        h4: {
            fontWeight: 700,
            fontSize: '2.1em'
        }
    },
});
const useStyles = makeStyles({
    root: {
        width: 300,
        color: 'primary'
    },
    Typography: {
        marginRight: '18px',
        marginTop: '4px',
        color: 'white'
    },
    options: {
        color: 'white'
    },
    Box: {
        height: '50px',
        width: '300px',
        marginLeft: '-16px',
        display: 'flex',
        alignItems: 'center',


    },
    icons: {
        paddingLeft: '50px'
    }
});



function SideBar() {
    const location = useLocation()

    const navigate = useNavigate()
    const classes = useStyles();
    const [overviewBg, setOverviewBg] = useState('#44586D');
    const [createUserBg, setCreateUserBg] = useState();
    const [depositBg, setDepositBg] = useState();
    const [withdrawBg, setWithdrawBg] = useState();
    const [transferBg, setTransferBg] = useState();

    useEffect(() => {
        if ((location.pathname === '/main') || (location.pathname.includes('/main/info'))) {
            setOverviewBg('#44586D')
        }
        else {
            setOverviewBg('')
        }
        if (location.pathname.includes('/main/create')) {
            setCreateUserBg('#44586D')
        }
        else {
            setCreateUserBg('')
        }
        if (location.pathname.includes('/main/deposit')) {
            setDepositBg('#44586D')
        }
        else {
            setDepositBg('')
        }
        if (location.pathname.includes('/main/withdraw')) {
            setWithdrawBg('#44586D')
        }
        else {
            setWithdrawBg('')
        }
        if (location.pathname.includes('/main/transfer')) {
            setTransferBg('#44586D')
        }
        else {
            setTransferBg('')
        }

    }, [location.pathname])

    const overviewBackground = () => {
        // setOverviewBg('#44586D')
        // setCreateUserBg('')
        // setDepositBg('')
        // setWithdrawBg('')
        // setTransferBg('')
        return navigate('')
    };

    const createUserBackground = () => {
        // setOverviewBg('')
        // setCreateUserBg('#44586D')
        // setDepositBg('')
        // setWithdrawBg('')
        // setTransferBg('')
        return navigate('create')
    };

    const depositBackground = () => {
        // setOverviewBg('')
        // setCreateUserBg('')
        // setDepositBg('#44586D')
        // setWithdrawBg('')
        // setTransferBg('')
        return navigate('deposit')
    };

    const withdrawBackground = () => {
        // setOverviewBg('')
        // setCreateUserBg('')
        // setDepositBg('')
        // setWithdrawBg('#44586D')
        // setTransferBg('')
        return navigate('withdraw')
    };

    const transferBackground = () => {
        // setOverviewBg('')
        // setCreateUserBg('')
        // setDepositBg('')
        // setWithdrawBg('')
        // setTransferBg('#44586D')
        return navigate('transfer')
    };
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Card
                    className={classes.root}
                    style={{
                        backgroundColor: '#384859',
                        position: 'absolute',
                        marginLeft: '18px',
                        top: '20px',
                        bottom: '20px',
                        borderRadius: '5px'
                    }}
                    elevation={0}
                >
                    <CardContent>
                        <Box
                            marginTop={'49px'}
                            marginLeft={'-60px'}
                        >
                            <Typography
                                variant='h4'
                                className={classes.options}
                            >
                                <img
                                    alt='logo'
                                    style={{
                                        width: '300px',
                                        height: '80px',
                                        paddingLeft: '1.2em',
                                        marginTop: '-0.65rem'
                                    }} src={YsLogo}></img>
                            </Typography>
                        </Box>
                        <Box
                            className={`${classes.Box} active box`}
                            marginTop={'101px'}
                            component='div'
                            onClick={overviewBackground}
                            style={{ backgroundColor: `${overviewBg}` }}
                        >
                            <Typography
                                className={classes.Typography}
                            >
                                <AssignmentIcon
                                    className={classes.icons} />
                            </Typography>
                            <Typography
                                variant='h6'
                                className={classes.options}
                            >
                                Overview
                            </Typography>
                        </Box>
                        <Box
                            className={`${classes.Box} box`}
                            marginTop={'18px'}
                            component='div'
                            onClick={createUserBackground}
                            style={{ backgroundColor: `${createUserBg}` }}
                        >
                            <Typography
                                className={classes.Typography}
                            >
                                <AddBoxIcon
                                    className={classes.icons} />
                            </Typography>
                            <Typography
                                variant='h6'
                                className={classes.options}
                            >
                                Create User
                            </Typography>
                        </Box>
                        <Box
                            className={`${classes.Box} box`}
                            marginTop={'18px'}
                            component='div'
                            onClick={depositBackground}
                            style={{ backgroundColor: `${depositBg}` }}
                        >
                            <Typography
                                className={classes.Typography}
                            >
                                <AccountBalanceWalletIcon
                                    className={classes.icons} />
                            </Typography>
                            <Typography
                                variant='h6'
                                className={classes.options}
                            >
                                Deposit Money
                            </Typography>
                        </Box>
                        <Box
                            className={`${classes.Box} box`}
                            marginTop={'18px'}
                            component='div'
                            onClick={withdrawBackground}
                            style={{ backgroundColor: `${withdrawBg}` }}
                        >
                            <Typography
                                className={classes.Typography}
                            >
                                <CreditCardSharpIcon
                                    className={classes.icons} />
                            </Typography>
                            <Typography
                                variant='h6'
                                className={classes.options}
                            >
                                Withdraw Money
                            </Typography>
                        </Box>
                        <Box
                            className={`${classes.Box} box`}
                            marginTop={'18px'}
                            component='div'
                            onClick={transferBackground}
                            style={{ backgroundColor: `${transferBg}` }}
                        >
                            <Typography
                                className={classes.Typography}
                            >
                                <SyncAltIcon
                                    className={classes.icons} />
                            </Typography>
                            <Typography
                                variant='h6'
                                className={classes.options}
                            >
                                Make a Transfer
                            </Typography>
                        </Box>
                        <hr
                            style={{
                                borderColor: 'rgb(110, 134, 144)',
                                marginTop: '28vh'
                            }} />
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: '40%',
                                cursor: 'pointer'
                            }}>
                            <SettingsIcon
                                style={{
                                    color: 'white'
                                }} />
                            <h4
                                style={{
                                    color: 'white',
                                    paddingLeft: '0.8rem',
                                    fontWeight: '400'
                                }}>Settings</h4>
                        </div>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    )
}

export default SideBar
