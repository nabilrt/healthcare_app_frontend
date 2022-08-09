import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";


const PatientNotice = () => {
    const[notices,setNotices]=useState([]);
    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/patient/notices',notices).then(resp=>{
            console.log(resp.data);
            setNotices(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);

    return(

        <div className="container">

            <h4>Notices For Patient</h4> <br/>
            <table className="table table-hover table-sm">
                <thead>
                <tr >
                    <th >Notice ID</th>
                    <th>Message</th>
                </tr>
                </thead>
                <tbody>
                {
                    notices.map((item, i) => (
                        <tr key={i}>
                            <td>{item.notice_id}</td>
                            <td>{item.message}</td>
                            <br/>
                        </tr>
                    ))
                }
                </tbody>


            </table>

        </div>
    )

}
export default PatientNotice;
