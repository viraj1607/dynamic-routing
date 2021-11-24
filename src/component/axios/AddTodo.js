import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Select } from "@mui/material";

function AddTodo() {
  const [userId, setUserId] = useState("");
  const [task, setTask] = useState("");
  const [status, setStatus] = useState(false);
  console.log(status ? "Yes" : "No");
  return (
    <div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="User Id"
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <br />
        <select>
          <option onClick={() => setStatus(!status)}>Yes</option>
          <option onClick={() => setStatus(status)}>No</option>
        </select>
      </div>
      <button>Add Details</button>
    </div>
  );
}

export default AddTodo;
