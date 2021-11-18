import React,{useContext, useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./add.css"
import Context from '../../context/context';
import { withRouter } from 'react-router';

function Add(props) {
    const studentInfo = useContext(Context);
    const {history}=props;
    const[studentData,setStudentData]=useState({id:studentInfo+1,name:"",age:"",course:"",batch:""});
    console.log(studentInfo)

    const formHandle=(e)=>{
        setStudentData({[e.target.name]:e.target.value})
    }

    const addDetails=(e)=>{
        e.preventDefault();
        studentInfo.push(studentData);
    }
    console.log(studentInfo)

    return (
        <div className="add-container">
            <div className="add-flex-container">
                <TextField
                required
                id="outlined-required"
                label="Name"
                name="name"
                onChange={formHandle}
                />
                <TextField
                required
                id="outlined-required"
                label="Age"
                name="age"
                onChange={formHandle}
                />
                <TextField
                required
                id="outlined-required"
                label="Course"
                name="course"
                onChange={formHandle}
                />
                <TextField
                required
                id="outlined-required"
                label="Batch"
                name="batch"
                onChange={formHandle}
                />
            </div>
            <Button variant="contained" onClick={addDetails}>Add Details</Button>
            <br/>
            <br/>
            <Button onClick={()=>{history.goBack()}} variant="contained">Back</Button>
        </div>
    )
}

export default withRouter(Add)
