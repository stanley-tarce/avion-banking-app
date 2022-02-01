import { Container, Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core'
import React from 'react'
import { createFullName, fetchInfo } from '../../Function/'
import transactions from '../../Components2/Functions/transaction'
import TransactionList from '../Other Components/TransactionList'
import TransactionValidation from '../../Components2/Functions/TransactionValidation'
import ValidateModal from '../../Components2/ValidateModal'
import { CreateContext } from '../../Data';
import { useContext } from 'react'
import { api } from '../../Utility/API'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles(() => ({
   root: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      height: '70vh',
      width: 'inherit',
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
      maxHeight: '25px',
      marginBottom: '25px',



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
   },
   deposit: {
      // width: '100%'
   },
   tabledata: {
      position: 'absolute',
      top: '0',
      right: '0px',
   }
}))


export default function Deposit() {
   const { depositAccountNumber,
      setDepositAccountNumber, accounts, setAccounts } = useContext(CreateContext)
   const { validate } = TransactionValidation
   const classes = useStyles()
   const { deposit } = transactions
   const [transactionlist, setTransactionList] = React.useState([])
   const [amount, setAmount] = React.useState(0)
   const [balance, setBalance] = React.useState(0)
   // const [accountNumber, setAccountNumber] = React.useState('')  //accountNumber === accountID
   const [accountName, setAccountName] = React.useState('')
   const [accountType, setAccountType] = React.useState('')
   const [error, setError] = React.useState({})
   const [result, setResult] = React.useState({})
   const [open, setOpen] = React.useState(false)
   // const [message, setMessage] = React.userState('')
   const navigate = useNavigate()
   const button = (event) => {

      let token = localStorage.getItem('token')
      event.preventDefault()
      let obj = {
         headers: { Authorization: token },
         body: {
            amount: amount,
         },
         id: depositAccountNumber
      }
      api('accounts#deposit', obj).then(response => {
         setDepositAccountNumber(0)
         console.log(response)
      }).catch(e => console.log(e)).then(i => {
         let a = {
            headers: { Authorization: token }
         }
         api('accounts#index', a).then(response => { setAccounts(response.data) }).catch(e => console.log(e))
      }).then(r => navigate('/main'))

   }


   let objectData = fetchInfo(accounts, depositAccountNumber)
   // React.useEffect(() => hookUserData(depositAccountNumber, setAccountName, createFullName, setAccountType, setBalance, setTransactionList), [depositAccountNumber, createFullName, hookUserData])
   // React.useEffect(() => {
   //    console.log(fetchInfo(userData, depositAccountNumber))
   // }, [fetchInfo])
   return (
      <>
         <Grid className={classes.root} container spacing={3}>
            <Grid item xs={6}>
               <Container className={classes.deposit}>
                  <Container>
                     <Typography variant="h6" align="left">
                        Account Number
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} onChange={(event) => setDepositAccountNumber(event.target.value)} />
                  </Container>
                  <Container>
                     <Typography variant="h6" align="left">
                        Account Name
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={objectData.accountName} onChange={(event) => setAccountName(event.target.value)} disabled />
                  </Container>
                  <Container>
                     <Typography variant="h6" align="left">
                        Account Type
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={objectData.accountType} onChange={(event) => setAccountType(event.target.value)} disabled />
                  </Container>
                  <Container>
                     <Typography variant="h6" align="left">
                        Balance
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={objectData.balance} onChange={(event) => setBalance(event.target.value)} disabled />
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
            <Grid className={classes.tabledata} item xs={6}>
               <TransactionList tabledata={objectData.transactions} />
            </Grid>
         </Grid>
         <ValidateModal open={open} setOpen={setOpen} result={result} />
      </>
   )
}

