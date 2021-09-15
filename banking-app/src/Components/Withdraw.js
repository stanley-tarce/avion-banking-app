import React from 'react'
import transactions from './Functions/transaction'
import hookUserDataFunctions from './Functions/hookUserData'
import TransactionList from './TransactionList'
import { Container, Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core'
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
   const button = event => {
      event.preventDefault()
      //INSERT CODE HERE
      withdraw(balance, amount, accountNumber, setAccountNumber, setBalance)
      setAmount(0)
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
               <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={amount} onChange={(event) => setAmount(event.target.value)} />
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
