import { Container, Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core'
import React from 'react'
import hookUserDataFunctions from './Functions/hookUserData'
import transactions from './Functions/transaction'
import TransactionList from './TransactionList'
import TransactionValidation from './Functions/TransactionValidation'
import ValidateModal from './ValidateModal'

const useStyles = makeStyles(() => ({
   root: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      height: '70vh',
      backgroundColor: 'white',
      position: 'fixed',
      bottom: '20px',
      right: '40px',
      left: '350px',
      borderTop: '1px solid grey'

   },
   textfield: {
      // marginTop: '15px',
      // marginBottom: '25px',
      borderRadius: '0px',
      border: '1px solid black',
      backgroundColor: 'white',
      width: '350px',
      maxHeight: '25px',



   },
   submitbutton: {
      marginTop: '25px',
      backgroundColor: '#384859',
      width: '200px',
      borderRadius: '31px',
      boxShadow: '0px 0px 0px 0px',
      '&:hover': {
         backgroundColor: '#446181',
         boxShadow: '0px 0px 0px 0px',
      },
      textTransform: 'none',
   }
}))


export default function Deposit() {

   const { validate } = TransactionValidation
   const classes = useStyles()
   const { deposit } = transactions
   const { hookUserData, createFullName } = hookUserDataFunctions
   const [transactionlist, setTransactionList] = React.useState([])
   const [amount, setAmount] = React.useState(0)
   const [balance, setBalance] = React.useState(0)
   const [accountNumber, setAccountNumber] = React.useState(0)  //accountNumber === accountID
   const [accountName, setAccountName] = React.useState('')
   const [accountType, setAccountType] = React.useState('')
   const [error, setError] = React.useState({})
   const [result, setResult] = React.useState({})
   const [open, setOpen] = React.useState(false)
   // const [message, setMessage] = React.userState('')
   const button = (event) => {
      event.preventDefault()
      if (validate(balance, amount, accountNumber, setError)) {
         deposit(balance, amount, accountNumber, setAccountNumber, setBalance)
         setResult({
            value: 'Success!',
            style: {
               color: 'green',
               '@keyframes buzzout': "10% {transfor}"}
         })
         setOpen(true)
         setAmount(0)
         setAccountNumber('')
      }
      else {
         // alert('Error')
         setResult({
            value: 'Error! Please Resolve',
            style: { color: 'red' }
         })
         setOpen(true)

      }
   }
   React.useEffect(() => hookUserData(accountNumber, setAccountName, createFullName, setAccountType, setBalance, setTransactionList), [accountNumber, createFullName, hookUserData])
   return (
      <>
         <Grid className={classes.root} container spacing={3}>
            <Grid item xs={6}>
               <Container>
                  <Container>
                     <Typography variant="h6" align="left">
                        Account Number
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} onChange={(event) => setAccountNumber(event.target.value)} {...(error.accountNumber && { error: true, helperText: error.accountNumber })} />
                  </Container>
                  <Container>
                     <Typography variant="h6" align="left">
                        Account Name
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={accountName} onChange={(event) => setAccountName(event.target.value)} disabled />
                  </Container>
                  <Container>
                     <Typography variant="h6" align="left">
                        Account Type
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={accountType} onChange={(event) => setAccountType(event.target.value)} disabled />
                  </Container>
                  <Container>
                     <Typography variant="h6" align="left">
                        Balance
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={balance} onChange={(event) => setBalance(event.target.value)} disabled />
                  </Container>
                  <Container>
                     <Typography variant="h6" align="left">
                        Amount
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={amount} onChange={(event) => setAmount(event.target.value)}{...(error.amount && { error: true, helperText: error.amount })} />
                  </Container>
                  <Container>
                     <Button className={classes.submitbutton} variant="contained" color="primary" onClick={button}>
                        Deposit Funds
                     </Button>
                  </Container>
               </Container>

            </Grid>
            <Grid item xs={6}>
               <TransactionList tabledata={transactionlist} />

            </Grid>
         </Grid>
         <ValidateModal open={open} setOpen={setOpen} result={result} />
      </>
   )
}

