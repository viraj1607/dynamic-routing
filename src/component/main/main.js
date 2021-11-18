import { Component } from "react";
import Navbar from "../navbar/navbar";
import {Switch, Route} from "react-router-dom";
import Home from "../home/home";
import About from "../about/about";
import Students from "../students/students";
import Info from "../info/info";
import Add from "../add/add";

class Main extends Component{
    state={
        studentInfo:[
            {id:1,name:"Joe",age:"23",course:"MERN",batch:"Aug"},
            {id:2,name:"Mike",age:"21",course:"MERN",batch:"Oct"},
            {id:3,name:"Roy",age:"24",course:"MERN",batch:"Jun"},
            {id:4,name:"Lilly",age:"25",course:"MERN",batch:"Aug"},
            {id:5,name:"James",age:"23",course:"MERN",batch:"Sep"}
        ]
    }

    getInfo=(id)=>{
        const{studentInfo}=this.state;
        return studentInfo.find((i)=>i.id=== +id);
    }

    render(){
        const{studentInfo}=this.state
        return(
            <div className="main-container">
                <Navbar/>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/about" exact>
                        <About/>
                    </Route>
                    <Route path="/students" exact>
                        <Students info={studentInfo}/>
                    </Route>
                    {/* <Route path="/students/add" exact>
                        <Add/>
                    </Route> */}
                    <Route path="/students/:id" exact>
                        <Info getInfo={this.getInfo} />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Main;