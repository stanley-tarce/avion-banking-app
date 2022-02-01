import React, { useContext } from 'react'
import transactions from '../../Components2/Functions/transaction'
import TransactionList from '../Other Components/TransactionList'
import { Container, Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core'
import TransactionValidation from '../../Components2/Functions/TransactionValidation'
import ValidateModal from '../../Components2/ValidateModal'
import { createFullName, fetchInfo } from '../../Function'
import { CreateContext } from '../../Data'
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
      marginTop: '10px',
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
   withdraw: {
      width: '100%'
   },
   tabledata: {
      position: 'absolute',
      top: '0',
      right: '0px',
   }
}))


export default function Withdraw() {
   const { withdrawAccountNumber, setWithdrawAccountNumber, accounts, setAccounts } = useContext(CreateContext)
   const classes = useStyles()
   const navigate = useNavigate()
   const { withdraw } = transactions
   const { validate } = TransactionValidation

   const [amount, setAmount] = React.useState(0)
   const [balance, setBalance] = React.useState(0)
   const [accountNumber, setAccountNumber] = React.useState("")  //accountNumber === accountID
   const [accountName, setAccountName] = React.useState('')
   const [accountType, setAccountType] = React.useState('')
   const [transactionlist, setTransactionList] = React.useState([])
   const [open, setOpen] = React.useState(false)
   const [error, setError] = React.useState({})
   const [result, setResult] = React.useState({})
   const button = event => {
      event.preventDefault()
      let token = localStorage.getItem('token')
      let data = {
         id: withdrawAccountNumber,
         body: { amount: amount },
         headers: { Authorization: token }
      }
      api('accounts#withdraw', data).then(r => {
         setWithdrawAccountNumber('')
         console.log(r)
      }).catch(e => console.log(e.response)).then(r => {
         let obj = { headers: { Authorization: token } }
         api('accounts#index', obj).then(res => {
            setAccounts(res.data)
         }).catch(e => console.log(e.response))
      }).then(r => navigate('/main'))

   }
   let objectData = fetchInfo(accounts, withdrawAccountNumber)
   return (
      <>
         <Grid className={classes.root} container spacing={7}>
            <Grid item xs={6} >
               <Container className={classes.withdraw} >
                  <Container >
                     <Typography variant="h6" align="left">
                        Account Number
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} onChange={(event) => setWithdrawAccountNumber(event.target.value)}
                     // {...(error.accountNumber && { error: true, helperText: error.accountNumber })} 

                     />
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
                        Balances
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={objectData.balance} onChange={(event) => setBalance(event.target.value)} disabled />
                  </Container>
                  <Container>
                     <Typography variant="h6" align="left">
                        Amount
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} onChange={(event) => setAmount(event.target.value)}
                     // {...(error.amount && { error: true, helperText: error.amount })} 

                     />
                  </Container>
                  <Container>
                     <Button className={classes.submitbutton} variant="contained" color="primary" onClick={button}>
                        Withdraw Funds
                     </Button>
                  </Container>
               </Container>

            </Grid>
            <Grid item s={6} className={classes.tabledata} >
               <TransactionList tabledata={objectData.transactions} />
            </Grid>
         </Grid>
         <ValidateModal open={open} setOpen={setOpen} result={result} /> </>
   )
}
