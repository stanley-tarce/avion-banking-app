import React, { useContext } from 'react'
// import transactions from '../../Components2/Functions/transaction'
import { Container, Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core'
import TransactionList from '../Other Components/TransactionList'
// import TransactionValidation from '../../Components2/Functions/TransactionValidation'
// import ValidateModal from '../../Components2/ValidateModal'
import { CreateContext } from '../../Data';
import { fetchInfo } from '../../Function'
import { useNavigate } from 'react-router-dom'
import { api } from '../../Utility/API';

const useStyles = makeStyles(() => ({
        root: {
                fontFamily: 'Roboto',
                // fontSize: '10px',
                marginTop: '20vh',
                fontWeight: 400,
                height: '70vh',
                width: 'inherit',
                backgroundColor: 'white',
                position: 'absolute',
                bottom: '20px',
                right: '40px',
                left: '350px',
                borderTop: '1px solid grey',
                overflowY: 'scroll'
        },
        textfield: {
                // marginTop: '15px',
                // marginBottom: '25px',
                marginLeft: '2em',
                borderRadius: '0px',
                border: '1px solid black',
                backgroundColor: 'white',
                width: '100%',
                maxHeight: '25px',
                marginBottom: '20px',
        },
        container: {
                // display: 'flex',
                width: '100%',
                height: 'max-content',
                justifyContent: 'space around',
                // paddingBottom: '1.2rem',
                marginLeft: '-1.2rem',
        },
        submitbutton: {
                backgroundColor: '#384859',
                width: '200px',
                borderRadius: '32.5px',
                boxShadow: '0px 0px 0px 0px',
                marginBottom: '-20px',
                color: 'white',
                '&:hover': {
                        backgroundColor: '#446181',
                        boxShadow: '0px 0px 0px 0px',
                },
                textTransform: 'none',
                // marginTop: '20px',
                marginLeft: '2em'
        },
        transFer: {
                width: '100%',
                // overflowY: 'scroll',
        },
        typography: {
                marginLeft: '2em'
                // fontSize: '10px'
        },
        transfercontainer: {
                position: 'relative',
                width: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                maxHeight: '100vh',
                // overflowY: 'auto',

        },
        tabledata: {
                position: 'absolute',
                top: '0px',
                right: '13em'
        },
}))




export default function Transfer() {
        const { accounts, setAccounts, transferToSendAccountNumber,
                setTransferToSendAccountNumber, transferToReceiveAccountNumber,
                setTransferToReceiveAccountNumber, token } = useContext(CreateContext)
        const classes = useStyles()
        const navigate = useNavigate()
        const [amount, setAmount] = React.useState(0)
        const [error, setError] = React.useState({})
        const transferbutton = (event) => {
                event.preventDefault()
                let data = {
                        id: transferToSendAccountNumber,
                        transferId: transferToReceiveAccountNumber,
                        body: { amount: amount },
                        headers: { Authorization: token }
                }
                api('accounts#transfer', data).then(res => {
                        console.log(res)
                        setTransferToReceiveAccountNumber('')
                        setTransferToSendAccountNumber('')
                        setAmount(0)
                }).catch(err => {
                        setError(err.response.data)
                        throw new Error(err)
                }).then(r => {
                        let obj = { headers: { Authorization: token } }
                        api('accounts#index', obj).then(res => { setAccounts(res.data) }).catch(error => console.log(error.response))
                }).then(r => navigate('/main')).catch(e => e)
        }
        let objectData1 = fetchInfo(accounts, transferToSendAccountNumber)
        let objectData2 = fetchInfo(accounts, transferToReceiveAccountNumber)
        return (
                <>
                        <Grid className={classes.root} container spacing={7}>
                                <Grid item xs={5} className={classes.transFer}>
                                        <Container className={classes.transfercontainer} >
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Account Number
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={transferToSendAccountNumber}
                                                                onChange={(e) => setTransferToSendAccountNumber(e.target.value)}
                                                                {...(error?.errors?.account_number && { error: true, helperText: error?.errors?.account_number[0] })}

                                                        />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Account Type
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={objectData1.accountType} disabled />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Full Name
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={objectData1.accountName} disabled />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Balance
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={objectData1.balance} disabled />
                                                </Container>

                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Sending to
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={transferToReceiveAccountNumber} onChange={(event) => setTransferToReceiveAccountNumber(event.target.value)}
                                                                // {...(error.accountNumber2 && { error: true, helperText: error.accountNumber2 })} 
                                                                {...(error?.errors?.account_number2 && { error: true, helperText: error?.errors?.account_number2[0] })}

                                                        />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Account Type
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={objectData2.accountType} disabled />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Full Name
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={objectData2.accountName} disabled />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Balance
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={objectData2.balance} disabled />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Amount
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={amount} onChange={(event) => setAmount(event.target.value)}
                                                                // {...(error.amount && { error: true, helperText: error.amount })} 
                                                                {...(error?.errors?.amount && { error: true, helperText: error?.errors?.amount[0] })}
                                                        />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Button className={classes.submitbutton} onClick={transferbutton}>
                                                                Transfer Funds
                                                        </Button>
                                                </Container>
                                        </Container>
                                </Grid>
                                <Grid item xs={7} className={classes.tabledata}>
                                        <TransactionList tabledata={objectData1.transactions} />
                                </Grid>
                        </Grid>
                </>








        )
}
