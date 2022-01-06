import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { Card, CardHeader } from '@material-ui/core'
import TransactionTable from './TransactionTable'




const useStyles = makeStyles(() => ({
     root: {
          fontFamily: 'Roboto',
          height: '310px',
          width: '525px',

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
                    <Grid className={css.calendarContainer} item xs={6}>
                         {/* <Select
                              label={"Select Month"}
                              value={month}
                              onChange={(e) => setMonth(e.target.value)}
                              disableUnderline={true}
                         >
                              <MenuItem value={1}>January</MenuItem>
                              <MenuItem value={2}>February</MenuItem>
                              <MenuItem value={3}>March</MenuItem>
                              <MenuItem value={4}>April</MenuItem>
                              <MenuItem value={5}>May</MenuItem>
                              <MenuItem value={6}>June</MenuItem>
                              <MenuItem value={7}>July</MenuItem>
                              <MenuItem value={8}>August</MenuItem>
                              <MenuItem value={9}>September</MenuItem>
                              <MenuItem value={10}>October</MenuItem>
                              <MenuItem value={11}>November</MenuItem>
                              <MenuItem value={12}>December</MenuItem>
                         </Select> */}
                    </Grid>

               </Grid>
               <Grid>
                    {/* <Grid item xs={1} /> */}

                    <TransactionTable tabledata={tabledata} />

                    {/* <Grid item xs={1} /> */}
               </Grid>
          </Card>

     )
}

export default TransactionList
