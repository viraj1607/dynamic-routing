import { createContext } from "react";

// const studentDetails=[
//     {id:1,name:"Joe",age:"23",course:"MERN",batch:"Aug"},
//     {id:2,name:"Mike",age:"21",course:"MERN",batch:"Oct"},
//     {id:3,name:"Roy",age:"24",course:"MERN",batch:"Jun"},
//     {id:4,name:"Lilly",age:"25",course:"MERN",batch:"Aug"},
//     {id:5,name:"James",age:"23",course:"MERN",batch:"Sep"},
// ]

// getInfo=(id)=>{
//     const{studentInfo}=this.state;
//     return studentInfo.find((i)=>i.id=== +id);
// }

const studentContext = createContext();

export default studentContext;
