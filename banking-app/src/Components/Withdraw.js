import React from 'react'
import transactions from './Functions/transaction'
import hookUserDataFunctions from './Functions/hookUserData'
import TransactionList from './TransactionList'
import { Container, Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core'
import validate from './Functions/TransactionValidation'
const useStyles = makeStyles(() => ({
   root: {
      position: 'absolute',
      top: '25%',
      fontFamily: 'Roboto',
      fontWeight: 400,

   },
   textfield: {
      // marginTop: '15px',
      // marginBottom: '25px',
      maxHeight: '25px',
      borderRadius: '0px',
      border: '1px solid black',
      backgroundColor: 'white',
      width: '350px',

      

   },
   submitbutton: {
      backgroundColor: '#686F80',
      borderRadius: '31px',
      boxShadow: '0px 0px 0px 0px',
      '&:hover': {
         backgroundColor: '#686F80',
         boxShadow: '0px 0px 0px 0px',
      },
      textTransform: 'none',
      marginTop: '25px',
   }
}))


export default function Withdraw() {
   const classes = useStyles()
   const { withdraw } = transactions
   const { hookUserData, createFullName } = hookUserDataFunctions
   const [amount, setAmount] = React.useState(0)
   const [balance, setBalance] = React.useState(0)
   const [accountNumber, setAccountNumber] = React.useState("")  //accountNumber === accountID
   const [accountName, setAccountName] = React.useState('')
   const [accountType, setAccountType] = React.useState('')
   const [transactionlist, setTransactionList] = React.useState([])
   const [error, setError] = React.useState({})
   const button = event => {
      event.preventDefault()
      if (validate(balance,amount,setError)){
         withdraw(balance, amount, accountNumber, setAccountNumber, setBalance)
         setAmount(0)
      }
      else {
         alert('error!')
      }
      //INSERT CODE HERE
      // if validate is true - return the functions else return error 

   }
   React.useEffect(() => { hookUserData(accountNumber, setAccountName, createFullName, setAccountType, setBalance,setTransactionList) }, [hookUserData, accountNumber, createFullName])
   return (
      <Grid className={classes.root} container spacing={7}>
      <Grid item xs={6}>
         <Container>
            <Container>
               <Typography variant="h6" align="left">
                  Account Number
               </Typography>
               <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={accountNumber} onChange={(event) => setAccountNumber(event.target.value)} />
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
               <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={amount} onChange={(event) => setAmount(event.target.value)} {...(error && {error:true,helperText:error.amount})} />
            </Container>
            <Container>
               <Button className={classes.submitbutton} variant="contained" color="primary" onClick={button}>
                  Withdraw Funds
               </Button>
            </Container>
         </Container>
        
      </Grid>
      <Grid item s={6}>
         <TransactionList tabledata={transactionlist} />
      </Grid>
   </Grid>
   )
}
