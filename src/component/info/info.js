import React, { Component, useState } from "react";
// import {useNavigate} from "react-router-dom"
import { withRouter } from "react-router";
import studentContext from "../../context/studentcontext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./info.css";

const Info = (props) => {
  const { studentInfo, updateStudentInfoById } =
    React.useContext(studentContext);
  const { match, history } = props;
  const { id } = match.params;
  let getData = studentInfo.find((student) => student.id === parseInt(id));
  const [studentData, setStudentData] = useState({
    id: getData.id,
    name: getData.name,
    age: getData.age,
    course: getData.course,
    batch: getData.batch,
  });

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.id]: e.target.value });
  };

  const saveDetails = () => {
    updateStudentInfoById(parseInt(id), studentData);
    history.goBack();
  };
  console.log(studentInfo);
  console.log(studentData);

  console.log({ ...studentData });
  // const {info}={...this.props.info}
  return (
    <div className="info-container">
      <h1>Student {id} Info</h1>
      <TextField
        id="name"
        label="Name"
        defaultValue={getData.name}
        onChange={handleChange}
      />
      <TextField
        id="age"
        label="Age"
        defaultValue={getData.age}
        onChange={handleChange}
      />
      <TextField
        id="course"
        label="Course"
        defaultValue={getData.course}
        onChange={handleChange}
      />
      <TextField
        id="batch"
        label="Batch"
        defaultValue={getData.batch}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={saveDetails}>
        Save Details
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </Button>
    </div>
  );
};

export default withRouter(Info);
