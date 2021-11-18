import { Component } from "react";
import { withRouter } from "react-router";

const Info=(props)=>{
    // handleChange=(e)=>{
    //     this.setState({[e.target.id]:e.target.value})
    // }
        const {match,history,getInfo}=props;
        const {id}=match.params;
        // const {info}={...this.props.info};
        const info=getInfo(id);
        console.log(info)
        return(
            <div className="info-container">
                <h1>Student {id} Info</h1>
                <p><strong>Name:</strong> <input defaultValue={info.name} id="name" /></p>
                <p><strong>Age:</strong> <input defaultValue={info.age} id="age" /></p>
                <p><strong>Course:</strong> <input defaultValue={info.course} id="course" /></p>
                <p><strong>Batch:</strong> <input defaultValue={info.batch} id="batch" /></p>
                <button>Save Details</button> <br/>
                <button onClick={()=>{history.goBack()}}>Back</button>
            </div>
        )
}

export default withRouter(Info);