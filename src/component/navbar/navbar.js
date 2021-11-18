import { Component } from "react";
import {NavLink} from "react-router-dom";
import "./navbar.css"


class Navbar extends Component{
    render(){
        let navlinks=[
            {label:"Home", to:"/"},
            {label:"About", to:"/about"},
            {label:"Students", to:"/students"}
        ]
        return(
            <div className="navbar-container">
                <ul className="navlinks">
                    {navlinks.map((item,index)=>{
                        return(
                            <li><NavLink to={item.to} key={index} exact>{item.label}</NavLink></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Navbar;