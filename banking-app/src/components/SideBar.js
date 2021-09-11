import React from 'react'
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
        marginTop: '4px'
    },
    Box: {
        height: '60px',
        width: '100%',
        marginLeft: '31px',
        display: 'flex',
        alignItems: 'center'
    }
});



function SideBar() {
    const classes = useStyles();
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Card 
                className={classes.root}
                style={{
                    backgroundColor: 'rgba(104, 111, 128, 0.24)', 
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
                            >
                            Caterpillar
                            </Typography>
                        </Box>
                        <Box
                        className={classes.Box}
                        marginTop={'101px'}
                        >
                            <Typography
                            className={classes.Typography}
                            >
                            <AssignmentIcon />
                            </Typography>
                            <Typography
                            variant='h6'
                            >
                                Overview
                            </Typography>
                        </Box>
                        <Box
                        className={classes.Box}
                        marginTop={'18px'}
                        >
                            <Typography
                            className={classes.Typography}
                            >
                                <AddBoxIcon />
                            </Typography>
                            <Typography
                            variant='h6'
                            >
                                Create User
                            </Typography>
                        </Box>
                        <Box
                        className={classes.Box}
                        marginTop={'18px'}
                        >
                            <Typography
                            className={classes.Typography}
                            >
                                <AccountBalanceWalletIcon />
                            </Typography>
                            <Typography
                            variant='h6'
                            >
                                Deposit Money
                            </Typography>
                        </Box>
                        <Box
                        className={classes.Box}
                        marginTop={'18px'}
                        >
                            <Typography
                            className={classes.Typography}
                            >
                                <CreditCardSharpIcon />
                            </Typography>
                            <Typography
                            variant='h6'
                            >
                                Withdraw Money
                            </Typography>
                        </Box>
                        <Box
                        className={classes.Box}
                        marginTop={'18px'}
                        >
                            <Typography
                            className={classes.Typography}
                            >
                                <SyncAltIcon />
                            </Typography>
                            <Typography
                            variant='h6'
                            >
                                Make a Transfer
                            </Typography>
                        </Box>

                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    )
}

export default SideBar
