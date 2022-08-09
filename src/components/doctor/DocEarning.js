import React, {useEffect, useState} from "react";
import axios from "axios";

import {useNavigate} from "react-router-dom";

const DocEarning = () =>{

    const[earning,setEarning]=useState([]);

    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    let history=useNavigate();
    axios.defaults.headers.common["Authorization"] = obj.token;


    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/doctor/earnings',obj).then(resp=>{
            console.log(resp.data);
            setEarning(resp.data);

        }).catch(
            err=>{
                history('/login');
                console.log(err.response.data);
            });

    },[]);

    return(
        <div className="container">
            <h4>Earning Details</h4>
            <small>Checkout your earnings</small> <br/> <br/>
            <table className="table table-responsive-sm">
                <thead>
                <tr>
                    <th>Appointment ID</th>
                    <th>Patient ID</th>
                    <th>Amount</th>

                </tr>
                </thead>
              <tbody>
              {
                  earning.map((item, i) => (
                      <tr key={i} className="table-sm">
                          <td>{item.appointment_id}</td>
                          <td>{item.patient_id}</td>
                          <td>{item.paid_amount}$</td>
                          <br/>
                      </tr>
                  ))
              }
              </tbody>

            </table>
        </div>
    )
}

export default DocEarning;