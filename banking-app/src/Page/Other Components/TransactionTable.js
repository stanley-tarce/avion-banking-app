import { withStyles, makeStyles, Table, TableBody, TableCell, TableHead, TableContainer, Container, TableRow, TablePagination, TableFooter } from '@material-ui/core'
import React from 'react'


const useStyle = makeStyles(() => ({
     tablecontainer: {
          width: "100%",
     },
     table: {
          width: '100%',


          fontFamily: 'Roboto',


     },
     tablecells: {
          height: 'max-content'
     },
     tablerows: {
          maxHeight: '5px',
          '&:nth-of-type(odd)': {
               backgroundColor: '#f5f5f5'
          },
     },
     tablebody: { overflowY: 'scroll' },
     paginater: {
          position: 'absolute',
          bottom: '0px',
          right: '0px'
     }


}))





function TransactionTable(props) {
     const [page, setPage] = React.useState(0);
     const [rowsPerPage, setRowsPerPage] = React.useState(5);
     // const rowsPerPage = 3;

     const { tabledata } = props //Table data is an array of objects
     // const tabledata = [{ amount: 75000, balance: 675000, date: "2021-9-11", type: "transfer" },
     // { amount: 675000, balance: 0, date: "2021-9-11", type: "withdraw" }
     const handleChangePage = (event, newPage) => {
          setPage(newPage);
     };
     // const handleChangeRowsPerPage = (event) => {
     //      setRowsPerPage(parseInt(event.target.value, 10));
     //      setPage(0);
     // };



     const classes = useStyle()
     return (<>
          <TableContainer className={classes.tablecontainer} component={Container} fullWidth>
               <Table className={classes.table} size={'small'}>
                    <TableHead>
                         <TableCell style={{ height: '10px' }}>#</TableCell>
                         <TableCell style={{ height: '10px' }}>Amount</TableCell>
                         <TableCell style={{ height: '10px' }}>Balance</TableCell>
                         <TableCell style={{ height: '10px' }}>Date</TableCell>
                         <TableCell style={{ height: '10px' }}>Type</TableCell>
                    </TableHead>
                    <TableBody>
                         {tabledata.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                              const { amount, balance, created_at, transaction_type } = row
                              let date = created_at.split('T')[0]
                              return (
                                   <TableRow key={index + 1} className={classes.tablerows}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{amount}</TableCell>
                                        <TableCell>{balance}</TableCell>
                                        <TableCell>{date}</TableCell>
                                        <TableCell>{transaction_type}</TableCell>
                                   </TableRow>
                              )
                         })}

                    </TableBody>




               </Table>
          </TableContainer>
          <TablePagination className={classes.paginater}
               rowsPerPageOptions={rowsPerPage}
               component="div"
               count={tabledata.length}
               rowsPerPage={rowsPerPage}
               page={page}
               onPageChange={handleChangePage}

          /></>
     )
}

export default TransactionTable
