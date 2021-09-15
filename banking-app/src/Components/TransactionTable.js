import { withStyles, makeStyles, Table, TableBody, TableCell, TableHead, TableContainer, Container, TableRow } from '@material-ui/core'
import React from 'react'


const useStyle = makeStyles(() => ({
     tablecontainer: {

     },
     table: {
          width: '100%',
          height: 'max-content',
          overflowX: 'scroll',
          fontFamily: 'Roboto',
          overflowY: 'scroll',

     },
     tablerows: {
          '&:nth-of-type(odd)': {
               backgroundColor: '#f5f5f5'
          }
     }


}))





function TransactionTable(props) {
     const { tabledata } = props //Table data is an array of objects
     // const tabledata = [{ amount: 75000, balance: 675000, date: "2021-9-11", type: "transfer" },
     // { amount: 675000, balance: 0, date: "2021-9-11", type: "withdraw" }


     const classes = useStyle()
     return (
          <TableContainer className={classes.tablecontainer} component={Container} fullWidth>
               <Table className={classes.table}  size={'small'}>
                    <TableHead>
                         <TableCell>#</TableCell>
                         <TableCell>Amount</TableCell>
                         <TableCell>Balance</TableCell>
                         <TableCell>Date</TableCell>
                         <TableCell>Type</TableCell>
                    </TableHead>
                    <TableBody>
                         {tabledata.map((row, index) => {
                              const { amount, balance, date, type } = row
                              return (
                                   <TableRow key={index+1} className={classes.tablerows}>
                                        <TableCell>{index+1}</TableCell>
                                        <TableCell>{amount}</TableCell>
                                        <TableCell>{balance}</TableCell>
                                        <TableCell>{date}</TableCell>
                                        <TableCell>{type}</TableCell>
                                   </TableRow>
                              )
                         })}
                    </TableBody>

               </Table>
          </TableContainer>
     )
}

export default TransactionTable
