import React from "react";
import Paper from "@material-ui/core/Paper";
import {Col} from "react-bootstrap";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import withStyles from "@material-ui/core/styles/withStyles";

const TransactionHistory = () => {
  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover
      }
    }
  }))(TableRow);

  function createData(key, subscribeOn, price, expiresOn) {
    return { key, subscribeOn, price, expiresOn };
  }

  const rows = [
    createData(1,"January 11th, 2021", 159, "December 11th, 2021",),
    createData(2,"January 11th, 2021", 237, "November 11th, 2021",),
    createData(3,"January 11th, 2021", 262, "August 11th, 2021",),
    createData(4,"January 11th, 2021", 305, "June 11th, 2021",),
    createData(5,"January 11th, 2021", 356, "July 11th, 2021",)
  ];
  return (
    <Col lg={{ span: 7, offset: 1 }} md={12}>
      <Paper elevation={1} className="payment-panel">
        <div className="heading">
          <h3>Transaction History</h3>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>Subscribed on</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Expires on</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.key}>
                  <TableCell component="th" scope="row">
                    {row.subscribeOn}
                  </TableCell>
                  <TableCell align="right">{`$${row.price}`}</TableCell>
                  <TableCell align="right">{row.expiresOn}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Col>
  );
};
export default TransactionHistory;
