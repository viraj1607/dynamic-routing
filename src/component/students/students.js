import React, { useContext } from "react";
import {Link} from "react-router-dom";
import "./students.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Context from "../../context/context";


function Students(){

        const studentInfo=useContext(Context);
        var obj={id:6,name:"Viraj",age:"23",course:"MERN",batch:"Aug"}
        console.log(studentInfo)
        return(
            <div className="students-container">
                <div className="add-btn">
                    <h2 onClick={()=>studentInfo.push(obj)}>Student Details</h2>
                    <div><Link to="/students/add">Add New Student</Link></div>
                </div>
                <TableContainer component={Paper}>  
                    <Table sx={{ minWidth: 550 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell><strong>Sr. No.</strong></TableCell>
                            <TableCell><strong>Student Name</strong></TableCell>
                            <TableCell align="right"><strong>Age</strong> </TableCell>
                            <TableCell align="right"><strong>Coures</strong></TableCell>
                            <TableCell align="right"><strong>Batch</strong></TableCell>
                            <TableCell align="right"><strong>Edit Details</strong></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {studentInfo.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="right">{row.id}</TableCell>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="right">{row.age}</TableCell>
                            <TableCell align="right">{row.course}</TableCell>
                            <TableCell align="right">{row.batch}</TableCell>
                            <TableCell align="right"><Link key={row.id} to={`/students/${row.id}`}>edit</Link></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
}

export default Students;