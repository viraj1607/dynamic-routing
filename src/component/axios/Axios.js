import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/todos";

function Axios() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  //   const [active, setActive] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="add-btn">
        <h2>Axios</h2>
        <div>
          <Link to="/axios/add">Add To Do Data</Link>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>User Id</StyledTableCell>
              <StyledTableCell align="left">Task</StyledTableCell>
              {/* <StyledTableCell align="left">Status</StyledTableCell> */}
              <StyledTableCell align="left">Active</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow
                key={row.name}
                style={{ backgroundColor: row.completed ? "green" : "red" }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.userId}
                </StyledTableCell>
                <StyledTableCell align="left">{row.title}</StyledTableCell>
                <StyledTableCell align="left">
                  {/* {active ? "Active" : "Not Active"} */}
                  {row.completed ? "Active" : "Not active"}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Axios;
