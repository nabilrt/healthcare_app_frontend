import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";

const DocInbox = () =>{

    const[inbox,setInbox]=useState([]);

    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};

    axios.post('http://127.0.0.1:8000/api/doctor/inbox',obj).then(resp=>{
        console.log(resp.data);
        setInbox(resp.data);

    }).catch(
        err=>{
            console.log(err.response.data);
        });

    return(
        <div className="container">
            <br/>
            <h4>Inbox</h4>
            <small>Contains all the conversations</small> <br/>
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Inbox ID</th>
                    <th className="table-primary">Patient ID</th>
                    <th className="table-primary">Appointment ID</th>
                    <th className="table-primary">Action</th>
                </tr>
                {
                    inbox.map((item, i) => (
                        <tr key={i}>
                            <td>{item.inbox_id}</td>
                            <td>{item.patient_id}</td>
                            <td>{item.appointment_id}</td>
                            <td><Link to={"/doctor/inbox/"+item.inbox_id} className="btn btn-outline-dark">Go To Chat</Link></td>
                            <br/>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default DocInbox;