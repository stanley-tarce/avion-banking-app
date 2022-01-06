import React from 'react'
import hookUserDataFunctions from './Functions/hookUserData'
import transactions from './Functions/transaction'
import { Container, Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core'
import TransactionList from './TransactionList'
import TransactionValidation from './Functions/TransactionValidation'
import ValidateModal from './ValidateModal'
const useStyles = makeStyles(() => ({
        root: {
                fontFamily: 'Roboto',
                fontSize: '10px',
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
                color: 'white',
                '&:hover': {
                        backgroundColor: '#446181',
                        boxShadow: '0px 0px 0px 0px',
                },
                textTransform: 'none',
                marginTop: '20px',
                marginLeft: '14em'
        },
        transFer: {
                width: '100%',
                // overflowY: 'scroll',
        },
        typography: {
                fontSize: '10px'
        },
        transfercontainer: {
                position: 'relative',
                width: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                maxHeight: '100vh',
                // overflowY: 'auto',

        },
        tabledata: {
                position: 'absolute',
                top: '0px',
                right: '20px'
        },
}))


export default function Transfer() {
        const classes = useStyles()
        const { transfer } = transactions
        const { hookUserData, createFullName } = hookUserDataFunctions
        const [accountNum1, setAccountNum1] = React.useState('')
        const [accountNum2, setAccountNum2] = React.useState('')
        const [balance1, setBalance1] = React.useState(0)
        const [balance2, setBalance2] = React.useState(0)
        const [amount, setAmount] = React.useState(0)
        const [name1, setName1] = React.useState('')
        const [name2, setName2] = React.useState('')
        const [accountType1, setAccountType1] = React.useState('')
        const [accountType2, setAccountType2] = React.useState('')
        const [transaction1, setTransaction1] = React.useState([])
        const [transaction2, setTransaction2] = React.useState([]) //dummy array
        const [error, setError] = React.useState({})
        const [result, setResult] = React.useState({})
        const [open, setOpen] = React.useState(false)
        const { customValidateForTransfer } = TransactionValidation
        const transferbutton = (event) => {
                event.preventDefault()
                if (customValidateForTransfer(balance1, amount, accountNum1, accountNum2, setError)) {
                        transfer(balance1, balance2, amount, accountNum1, accountNum2, setAmount, setAccountNum1, setAccountNum2)
                        setResult({
                                value: 'Success!',
                                style: {
                                        color: 'green',
                                        '@keyframes buzzout': "10% {transfor}"
                                }
                        })
                        setOpen(true)
                }
                else {
                        setResult({
                                value: 'Error! Please Resolve',
                                style: { color: 'red' }
                        })
                        setOpen(true)
                }
        }

        React.useEffect(() => { hookUserData(accountNum1, setName1, createFullName, setAccountType1, setBalance1, setTransaction1) }, [accountNum1, createFullName, hookUserData])
        React.useEffect(() => { hookUserData(accountNum2, setName2, createFullName, setAccountType2, setBalance2, setTransaction2) }, [accountNum2, createFullName, hookUserData])
        return (
                <>
                        <Grid className={classes.root} container spacing={7}>
                                <Grid item xs={5} className={classes.transFer}>
                                        <Container className={classes.transfercontainer} >
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Account Number
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={accountNum1} onChange={(event) => setAccountNum1(event.target.value)}{...(error.accountNumber && { error: true, helperText: error.accountNumber })} />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Account Type
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={accountType1} onChange={(event) => setAccountType1(event.target.value)} disabled />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Full Name
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={name1} onChange={(event) => setName1(event.target.value)} disabled />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Balance
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={balance1} onChange={(event) => setBalance1(event.target.value)} disabled />
                                                </Container>

                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Sending to
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={accountNum2} onChange={(event) => setAccountNum2(event.target.value)}{...(error.accountNumber2 && { error: true, helperText: error.accountNumber2 })} />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Account Type
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={accountType2} onChange={(event) => setAccountType2(event.target.value)} disabled />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Full Name
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={name2} onChange={(event) => setName2(event.target.value)} disabled />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Balance
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={balance2} onChange={(event) => setBalance2(event.target.value)} disabled />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Typography className={classes.typography} variant="h6" align="left">
                                                                Amount
                                                        </Typography>
                                                        <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={amount} onChange={(event) => setAmount(event.target.value)} {...(error.amount && { error: true, helperText: error.amount })} />
                                                </Container>
                                                <Container className={classes.container}>
                                                        <Button className={classes.submitbutton} onClick={transferbutton}>
                                                                Transfer Funds
                                                        </Button>
                                                </Container>
                                        </Container>
                                </Grid>
                                <Grid item xs={7} className={classes.tabledata}>
                                        <TransactionList tabledata={transaction1} />
                                </Grid>
                        </Grid>
                        <ValidateModal open={open} setOpen={setOpen} result={result} />
                </>








        )
}
