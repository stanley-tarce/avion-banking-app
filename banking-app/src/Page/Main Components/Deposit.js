import { Container, Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core'
import React from 'react'
import { fetchInfo } from '../../Function/'
import TransactionList from '../Other Components/TransactionList'
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
   },
   tabledata: {
      position: 'absolute',
      top: '0',
      right: '13em',
   }
}))


export default function Deposit() {
   const { depositAccountNumber,
      setDepositAccountNumber, accounts, setAccounts, token } = useContext(CreateContext)
   const classes = useStyles()
   const [amount, setAmount] = React.useState(0)
   const [error, setError] = React.useState({})
   const navigate = useNavigate()
   const button = (event) => {

      event.preventDefault()
      let obj = {
         headers: { Authorization: token },
         body: {
            amount: amount,
         },
         id: depositAccountNumber
      }
      api('accounts#deposit', obj).then(response => {
         setDepositAccountNumber('')
         return response
      }).catch(e => {
         setError(e.response.data)
         throw new Error(e)
      }).then(i => {
         setError({})
         let a = {
            headers: { Authorization: token }
         }
         api('accounts#index', a).then(response => { setAccounts(response.data) }).catch(e => {

         })
      }).then(r => navigate('/main')).catch(e => console.log(e))

   }
   let objectData = fetchInfo(accounts, depositAccountNumber)
   return (
      <>
         <Grid className={classes.root} container spacing={3}>
            <Grid item xs={6}>
               <Container className={classes.deposit}>
                  <Container>
                     <Typography variant="h6" align="left">
                        Account Number
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} value={depositAccountNumber} className={classes.textfield} onChange={(event) => setDepositAccountNumber(event.target.value)} {...(error?.errors?.account_number && { error: true, helperText: error?.errors?.account_number[0] })} />
                  </Container>
                  <Container>
                     <Typography variant="h6" align="left">
                        Account Name
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={objectData.accountName} disabled />
                  </Container>
                  <Container>
                     <Typography variant="h6" align="left">
                        Account Type
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={objectData.accountType} disabled />
                  </Container>
                  <Container>
                     <Typography variant="h6" align="left">
                        Balance
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={objectData.balance} disabled />
                  </Container>
                  <Container>
                     <Typography variant="h6" align="left">
                        Amount
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={amount} onChange={(event) => setAmount(event.target.value)}{...(error?.errors?.amount && { error: true, helperText: error?.errors?.amount })} />
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
      </>
   )
}

