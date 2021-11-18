import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./add.css"

function Add() {
    // const studentInfo=useContext(Context);
    // const [state, setstate] = useState({
    //     id:Math.random(),name:"",age:"",course:"",batch:""
    // });
    return (
        <div className="add-container">
            <div className="add-flex-container">
                <TextField
                required
                id="outlined-required"
                label="Name"
                />
                <TextField
                required
                id="outlined-required"
                label="Age"
                />
                <TextField
                required
                id="outlined-required"
                label="Course"
                />
                <TextField
                required
                id="outlined-required"
                label="Batch"
                />
            </div>
            <Button variant="contained">Add Details</Button>
        </div>
    )
}

export default Add
