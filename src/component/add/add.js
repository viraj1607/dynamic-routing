import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./add.css";
import studentContext from "../../context/studentcontext";
import { withRouter } from "react-router";

function Add(props) {
  const { studentInfo, addStudentInfo } = useContext(studentContext);
  const { history } = props;

  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    course: "",
    batch: "",
  });
  //   const [studentName, setStudentName] = useState("");
  //   const [studentAge, setStudentAge] = useState("");
  //   const [studentCourse, setStudentCourse] = useState("");
  //   const [studentBatch, setStudentBatch] = useState("");
  const formHandle = (e) => {
    setStudentData({ ...studentData, [e.target.id]: e.target.value });
  };
  //   const { name } = studentName;
  //   const { age } = studentAge;
  //   const { course } = studentCourse;
  //   const { batch } = studentBatch;
  //   console.log(name, age, course, batch);
  const { name, age, course, batch } = studentData;
  //   const obj = { name, age, course, batch };
  console.log(studentData);
  return (
    <div className="add-container">
      <div className="add-flex-container">
        <TextField required id="name" label="Name" onChange={formHandle} />
        <TextField required id="age" label="Age" onChange={formHandle} />
        <TextField required id="course" label="Course" onChange={formHandle} />
        <TextField required id="batch" label="Batch" onChange={formHandle} />
      </div>
      <Button
        variant="contained"
        onClick={() => addStudentInfo(name, age, course, batch)}
      >
        Add Details
      </Button>
      <br />
      <br />
      <Button
        onClick={() => {
          history.goBack();
        }}
        variant="contained"
      >
        Back
      </Button>
    </div>
  );
}

export default withRouter(Add);
