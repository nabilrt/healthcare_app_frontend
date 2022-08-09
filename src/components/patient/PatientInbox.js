import React from "react";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const PatientInbox = () =>{
    const[inbox,setInbox]=useState([]);

    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    axios.defaults.headers.common["Authorization"] = obj.token;
    let history=useNavigate();

    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/patient/inbox',obj).then(resp=>{
            console.log(resp.data);
            setInbox(resp.data);

        }).catch(
            err=>{
            //    history('/login');
                console.log(err.response.data);
            });

    },[]);


    return(


            <div className="container">

                <br/>
                <h4>Inbox</h4>
                <small>Contains all the conversations</small> <br/>
                <table className="table table-hover table-sm">
                                <thead>
                                <tr>
                                    <th>Inbox ID</th>
                                    <th>Doctor ID</th>
                                    <th>Appointment ID</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>

                                {
                                    inbox.map((item, i) => (
                                        <tr key={i} className="table-hover small">
                                            <td>{item.inbox_id}</td>
                                            <td>{item.doctor_id}</td>
                                            <td>{item.appointment_id}</td>
                                            <td><Link to={"/patient/conversation/"+item.inbox_id} className="btn btn-outline-dark btn-sm"><i className="icon material-symbols-outlined">
                                                chat
                                            </i></Link></td>
                                            <br/>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>

            </div>


    )
}

export default PatientInbox;