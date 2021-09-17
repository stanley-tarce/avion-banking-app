import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import { ThemeProvider, createTheme ,makeStyles } from '@material-ui/core/styles'
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import CreditCardSharpIcon from '@material-ui/icons/CreditCardSharp';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SettingsIcon from '@material-ui/icons/Settings';
import YsLogo from '../assets/YsWhite.svg';


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
    options:{
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



function SideBar(props) {
    const classes = useStyles();
    const [ overviewBg, setOverviewBg] = useState('#587EA6');
    const [ createUserBg, setCreateUserBg] = useState();
    const [ depositBg, setDepositBg] = useState();
    const [ withdrawBg, setWithdrawBg] = useState();
    const [ transferBg, setTransferBg] = useState();

    const overviewBackground = () => {
        setOverviewBg('#587EA6')
        setCreateUserBg('')
        setDepositBg('')
        setWithdrawBg('')
        setTransferBg('')
        props.setUserList(true);
        props.setCreateUser(false);
        props.setDeposit(false);
        props.setWithdraw(false);
        props.setTransfer(false);
    };

    const createUserBackground = () => {
        setOverviewBg('')
        setCreateUserBg('#587EA6')
        setDepositBg('')
        setWithdrawBg('')
        setTransferBg('')
        props.setUserList(false);
        props.setCreateUser(true);
        props.setDeposit(false);
        props.setWithdraw(false);
        props.setTransfer(false);
        
    };

    const depositBackground = () => {
        setOverviewBg('')
        setCreateUserBg('')
        setDepositBg('#587EA6')
        setWithdrawBg('')
        setTransferBg('')
        props.setUserList(false);
        props.setCreateUser(false);
        props.setDeposit(true);
        props.setWithdraw(false);
        props.setTransfer(false);
    };

    const withdrawBackground = () => {
        setOverviewBg('')
        setCreateUserBg('')
        setDepositBg('')
        setWithdrawBg('#587EA6')
        setTransferBg('')
        props.setUserList(false);
        props.setCreateUser(false);
        props.setDeposit(false);
        props.setWithdraw(true);
        props.setTransfer(false);
    };

    const transferBackground = () => {
        setOverviewBg('')
        setCreateUserBg('')
        setDepositBg('')
        setWithdrawBg('')
        setTransferBg('#587EA6')
        props.setUserList(false);
        props.setCreateUser(false);
        props.setDeposit(false);
        props.setWithdraw(false);
        props.setTransfer(true);
    };


    return (
        <div>
            <ThemeProvider theme={theme}>
                <Card 
                className={classes.root}
                style={{
                    backgroundColor: '#384859', 
                    position:'absolute', 
                    marginLeft:'18px', 
                    top:'20px', 
                    bottom:'20px',
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
                        style={{backgroundColor: `${overviewBg}`}}
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
                        style={{backgroundColor: `${createUserBg}`}}
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
                        style={{backgroundColor: `${depositBg}`}}
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
                        style={{backgroundColor: `${withdrawBg}`}}
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
                        style={{backgroundColor: `${transferBg}`}}
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
