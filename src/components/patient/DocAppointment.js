import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

const DocAppointment = () => {
    const{id}=useParams();
    const [appDate,setAppDate]=useState("");
    const [appTime,setAppTime]=useState("");

    const [issue,setIssue]=useState("");
    const [noTime,setnoTime]=useState("");
    let history=useNavigate();


    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token,appDate:appDate,appTime:appTime,issue:issue,id:id};


    const check=()=>{
        console.log(issue);
        axios.post('http://127.0.0.1:8000/api/patient/appointment/take',obj).then(resp=>{
            console.log(resp.data);

            if(resp.data==="Done"){
        history('/patient/inbox');
             }
            else if(resp.data==="Error"){
                setnoTime("Time slot not available, try another");
            }
            //   setInbox(resp.data);

        }).catch(
            err=>{

                console.log(err.response.data);
            });
    }

    return(
        <div className="container">
            <br/>

            <h4>Take appointment</h4>
            <br/>
            <form action="">
                <div className="mb-3">
                    <label htmlFor="app_time" className="form-label">Choose Time Slot</label>
                    <input type="time" name="app_time" id="app_time" className="form-control" value={appTime} onChange={(e)=>setAppTime(e.target.value)}/>
                    <br/>
                    <span className="text-danger">{noTime}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="app_date" className="form-label">Date</label>
                    <input type="date" name="app_date" id="app_date" className="form-control" value={appDate} onChange={(e)=>setAppDate(e.target.value)}/>
                </div>
                <br/>
                    <h6>Describe your problem here</h6>
                <div className="mb-3">
                    <label htmlFor="problem" className="form-label">Problem</label>
                    <textarea name="" id="" cols="10" rows="5" value={issue} onChange={(e)=>setIssue(e.target.value)} className="form-control"></textarea>
                </div>

            </form> <br/>
            <button onClick={check} className="btn btn-outline-primary btn-sm"><i className="icon material-symbols-outlined">event_available</i></button>

        </div>

    )
}

export default DocAppointment;

