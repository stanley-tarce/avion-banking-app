import React from 'react'
import hookUserDataFunctions from './Functions/hookUserData'
import transactions from './Functions/transaction'
import { Container, Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core'
import TransactionList from './TransactionList'

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
          color: 'white',
          '&:hover': {
               backgroundColor: '#686F80',
               boxShadow: '0px 0px 0px 0px',
          },
          textTransform: 'none',
     }
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
     const transferbutton = (event) => {
          event.preventDefault()
          transfer(balance1, balance2, amount, accountNum1, accountNum2, setAmount, setAccountNum1, setAccountNum2)
     }

     React.useEffect(() => { hookUserData(accountNum1, setName1, createFullName, setAccountType1, setBalance1, setTransaction1) }, [accountNum1, createFullName, hookUserData])
     React.useEffect(() => { hookUserData(accountNum2, setName2, createFullName, setAccountType2, setBalance2, setTransaction2) }, [accountNum2, createFullName, hookUserData])
     return (
          <Grid className={classes.root} container spacing={7}>
               <Grid item xs={6}>
                    <Container>
                         <Container>
                              <Typography variant="h6" align="left">
                                   Account Number
                              </Typography>
                              <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={accountNum1} onChange={(event) => setAccountNum1(event.target.value)} />
                         </Container>
                         <Container>
                              <Typography variant="h6" align="left">
                                   Account Type
                              </Typography>
                              <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={accountType1} onChange={(event) => setAccountType1(event.target.value)} disabled />
                         </Container>
                         <Container>
                              <Typography variant="h6" align="left">
                                   Full Name
                              </Typography>
                              <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={name1} onChange={(event) => setName1(event.target.value)} disabled />
                         </Container>
                         <Container>
                              <Typography variant="h6" align="left">
                                   Balance
                              </Typography>
                              <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={balance1} onChange={(event) => setBalance1(event.target.value)} disabled />
                         </Container>

                         <Container>
                              <Typography variant="h6" align="left">
                                   Sending to
                              </Typography>
                              <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={accountNum2} onChange={(event) => setAccountNum2(event.target.value)} />
                         </Container>
                         <Container>
                              <Typography variant="h6" align="left">
                                   Account Type
                              </Typography>
                              <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={accountType2} onChange={(event) => setAccountType2(event.target.value)} disabled />
                         </Container>
                         <Container>
                              <Typography variant="h6" align="left">
                                   Full Name
                              </Typography>
                              <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={name2} onChange={(event) => setName2(event.target.value)} disabled />
                         </Container>
                         <Container>
                              <Typography variant="h6" align="left">
                                   Balance
                              </Typography>
                              <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={balance2} onChange={(event) => setBalance2(event.target.value)} disabled />
                         </Container>
                         <Container>
                              <Typography variant="h6" align="left">
                                   Amount
                              </Typography>
                              <TextField InputProps={{ disableUnderline: true }} className={classes.textfield} value={amount} onChange={(event) => setAmount(event.target.value)} />
                         </Container>
                         <Container>
                              <Button className={classes.submitbutton} onClick={transferbutton}>
                                   Transfer Funds
                              </Button>
                         </Container>
                    </Container>
               </Grid>
               <Grid item xs={6}>
                    <TransactionList tabledata={transaction1} />
               </Grid>
          </Grid>








     )
}
