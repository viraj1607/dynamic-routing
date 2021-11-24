import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./students.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import studentContext from "../../context/studentcontext";
import EditIcon from "@mui/icons-material/Edit";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

function Students() {
  const { studentInfo, deleteStudentInfoById } = useContext(studentContext);
  console.log(studentInfo);
  return (
    <div className="students-container">
      <div className="add-btn">
        <h2>Student Details</h2>
        <div>
          <Link to="/students/add">Add New Student</Link>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Sr. No.</strong>
              </TableCell>
              <TableCell>
                <strong>Student Name</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Age</strong>{" "}
              </TableCell>
              <TableCell align="left">
                <strong>Coures</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Batch</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Edit Details</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Delete Details</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentInfo.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.age}</TableCell>
                <TableCell align="left">{row.course}</TableCell>
                <TableCell align="left">{row.batch}</TableCell>
                <TableCell align="left">
                  <Link key={row.id} to={`/students/${row.id}`}>
                    <EditIcon />
                  </Link>
                </TableCell>
                <TableCell align="left">
                  <div
                    style={{ cursor: "pointer" }}
                    key={row.id}
                    onClick={() => deleteStudentInfoById(row.id)}
                  >
                    <PersonRemoveIcon />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Students;
