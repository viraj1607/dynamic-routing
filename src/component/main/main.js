import { Component, useState, useRef } from "react";
import Navbar from "../navbar/navbar";
import { Switch, Route } from "react-router-dom";
import Home from "../home/home";
import About from "../about/about";
import Students from "../students/students";
import Info from "../info/info";
import Add from "../add/add";
import studentContext from "../../context/studentcontext";
import Axios from "../axios/Axios";
import AddTodo from "../axios/AddTodo";

const Main = () => {
  const [studentInfo, setStudentInfo] = useState([
    { id: 1, name: "Joe", age: "23", course: "MERN", batch: "Aug" },
    { id: 2, name: "Mike", age: "21", course: "MERN", batch: "Oct" },
    { id: 3, name: "Roy", age: "24", course: "MERN", batch: "Jun" },
    { id: 4, name: "Lilly", age: "25", course: "MERN", batch: "Aug" },
    { id: 5, name: "James", age: "23", course: "MERN", batch: "Sep" },
  ]);

  const idRef = useRef(studentInfo.length);

  const addStudentInfo = (name, age, course, batch) => {
    setStudentInfo((prevState) => {
      const updatedStudentInfo = [...prevState];
      idRef.current += 1;
      const id = idRef.current;

      updatedStudentInfo.push({
        id,
        name,
        age,
        course,
        batch,
      });
      return updatedStudentInfo;
    });
  };

  //   updateStudentInfoById(2,{name:"Viraj"})
  const updateStudentInfoById = (id, data) => {
    setStudentInfo((prevState) => {
      return prevState.map((info) => {
        if (info.id === id) {
          return { ...info, ...data };
        }
        return info;
      });
    });
  };

  const deleteStudentInfoById = (id) => {
    setStudentInfo((prevState) => {
      return prevState.filter((info) => info.id !== id);
    });
  };

  // getInfo=(id)=>{
  //     const{studentInfo}=this.state;
  //     return studentInfo.find((i)=>i.id=== +id);
  // }

  // const{studentInfo}=this.state
  return (
    <studentContext.Provider
      value={{
        studentInfo,
        addStudentInfo,
        updateStudentInfoById,
        deleteStudentInfoById,
      }}
    >
      <div className="main-container">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/students" exact>
            <Students />
          </Route>
          <Route path="/axios" exact>
            <Axios />
          </Route>
          <Route path="/students/add" exact>
            <Add />
          </Route>
          <Route path="/axios/add" exact>
            <AddTodo />
          </Route>
          <Route path="/students/:id" exact>
            <Info />
          </Route>
        </Switch>
      </div>
    </studentContext.Provider>
  );
};

export default Main;
