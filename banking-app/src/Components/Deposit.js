import { Container, Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core'
import React from 'react'
import hookUserDataFunctions from './Functions/hookUserData'
import transactions from './Functions/transaction'
import TransactionList from './TransactionList'


const useStyles = makeStyles(() => ({
   root: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      height: '70vh',
      backgroundColor: 'white',
      position: 'absolute',
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

      

   },
   submitbutton: {
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
   const classes = useStyles()
   const { deposit } = transactions
   const { hookUserData, createFullName } = hookUserDataFunctions
   const [transactionlist, setTransactionList] = React.useState([])
   const [amount, setAmount] = React.useState(0)
   const [balance, setBalance] = React.useState(0)
   const [accountNumber, setAccountNumber] = React.useState(0)  //accountNumber === accountID
   const [accountName, setAccountName] = React.useState('')
   const [accountType, setAccountType] = React.useState('')
   const button = (event) => {
      event.preventDefault()
      deposit(balance, amount, accountNumber, setAccountNumber, setBalance)
      setAmount(0)
   }
   React.useEffect(() => hookUserData(accountNumber, setAccountName, createFullName, setAccountType, setBalance, setTransactionList), [accountNumber, createFullName, hookUserData])
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
                     Deposit Funds
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
