import React, { useContext } from 'react'
import TransactionList from '../Other Components/TransactionList'
import { Container, Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core'
import { fetchInfo } from '../../Function'
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
      right: '13em',
   }
}))


export default function Withdraw() {
   const { withdrawAccountNumber, setWithdrawAccountNumber, accounts, setAccounts } = useContext(CreateContext)
   const classes = useStyles()
   const navigate = useNavigate()
   const [amount, setAmount] = React.useState('')
   const [error, setError] = React.useState({})
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
      }).catch(e => {
         setError(e.response.data)
         throw new Error(e)
      }).then(r => {
         let obj = { headers: { Authorization: token } }
         api('accounts#index', obj).then(res => {
            setAccounts(res.data)
         }).catch(e => console.log(e.response))
      }).then(r => navigate('/main')).catch(e => e)

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
                     <TextField InputProps={{ disableUnderline: true }} value={withdrawAccountNumber} className={classes.textfield} onChange={(event) => setWithdrawAccountNumber(event.target.value)}
                        {...(error?.errors?.account_number && { error: true, helperText: error?.errors?.account_number[0] })}

                     />
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
                        Balances
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={objectData.balance} disabled />
                  </Container>
                  <Container>
                     <Typography variant="h6" align="left">
                        Amount
                     </Typography>
                     <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} onChange={(event) => setAmount(event.target.value)}
                        {...(error?.errors?.amount && { error: true, helperText: error?.errors?.amount })}

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
      </>
   )
}
