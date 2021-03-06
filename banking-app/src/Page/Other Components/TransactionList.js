import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { Card, CardHeader } from '@material-ui/core'
import TransactionTable from './TransactionTable'




const useStyles = makeStyles(() => ({
     root: {
          fontFamily: 'Roboto',
          height: '310px',
          width: '120%',

          position: 'relative',
     },
     cardTitle: {
          fontSize: '30px !important',
          fontWeight: 'bold',
          color: 'black',
     },
     calendarContainer: {
          height: 'auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

     },
     transactioncontainer: {
          height: '100%',
          width: '100%',
          borderRadius: '0px',
          boxShadow: 'none',
     },


     secondContainer: {
          height: '100%',
          width: '100%',


     }
}))


function TransactionList(props) {
     const { tabledata } = props
     const css = useStyles()
     return (
          <Card className={css.root}>
               <Grid container>
                    <Grid item xs={6}>
                         <CardHeader className={css.cardTitle} title="Transactions" />
                    </Grid>

               </Grid>
               <Grid>
                    <TransactionTable tabledata={tabledata} />
               </Grid>
          </Card>

     )
}

export default TransactionList
