import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";


const DocInbox = () =>{

    const[inbox,setInbox]=useState([]);

    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    let history=useNavigate();
    axios.defaults.headers.common["Authorization"] = obj.token;

    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/doctor/inbox',obj).then(resp=>{
            console.log(resp.data);
            setInbox(resp.data);

        }).catch(
            err=>{
               // history('/login');
                console.log(err.response.data);
            });

    },[]);

    return(
        <div className="container">

            <br/>
            <h4>Inbox</h4>
            <small>Contains all the conversations</small> <br/>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Inbox ID</th>
                    <th>Patient ID</th>
                    <th>Appointment ID</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    inbox.map((item, i) => (
                        <tr className="table-hover small">
                            <td>{item.inbox_id}</td>
                            <td>{item.patient_id}</td>
                            <td>{item.appointment_id}</td>
                            <td><Link to={"/doctor/conversation/"+item.inbox_id} className="btn btn-outline-dark mb-sm-1 btn-sm"> <i className="icon material-symbols-outlined">
                               chat
                            </i></Link></td>
                        </tr>
                    ))
                }
                </tbody>

            </table>
        </div>
    )
}

export default DocInbox;