import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { withRouter } from "react-router";
// import { useHistory } from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/todos";

function AddTodo(props) {
  const [userId, setUserId] = useState("");
  const [task, setTask] = useState("");
  const [status, setStatus] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  const history = props.history;

  const addPost = (e) => {
    e.preventDefault();
    const data = { userId, task, status: false };
    axios
      .post(url, data)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    setBtnDisable(true);
    setUserId("");
    setTask("");
    history.goBack();
  };
  //   console.log(task, userId);
  //   console.log(status ? "Yes" : "No");
  return (
    <div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="User Id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <br />
        <select>
          <option onClick={() => setStatus(!status)}>Yes</option>
          <option value={false} onClick={(e) => setStatus(e.target.value)}>
            No
          </option>
        </select>
      </div>
      <button onClick={addPost} disabled={btnDisable}>
        {btnDisable ? "Loading..." : "Add Details"}
      </button>
    </div>
  );
}

export default withRouter(AddTodo);
