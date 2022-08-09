import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
const PatientConv = () =>{

    const {id}=useParams();
    const [convos,setConvos]=useState([]);
    const [rep,setRep]=useState(false);
    let history=useNavigate();

    useEffect(()=>{

        axios.get('http://127.0.0.1:8000/api/patient/convo/'+id).then(resp=>{
            console.log(resp.data);
            setConvos(resp.data);
        }).catch(
            err=>{
                console.log(err);
            });

    },[]);
    return (
        <div className="container">

            <h5>Conversation</h5>
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Conversation ID</th>
                    <th className="table-primary">Doctor ID</th>
                    <th className="table-primary">Message</th>
                    <th className="table-primary">Reply</th>
                    <th className="table-primary">Action</th>

                </tr>
                {
                    convos.map((item, i) => (
                        <tr key={i}>
                            <td>{item.conv_id}</td>
                            <td>{item.doctor_id}</td>
                            <td>{item.message}</td>
                            <td>{item.reply}</td>
                            <td><Link to={'/patient/conversation/reply/'+item.conv_id}>Reply</Link></td>
                            <br/>
                        </tr>
                    ))
                }
            </table> <br/>
            <Link to={"/patient/conversation/message/new/"+id} className="btn btn-outline-success">New Message</Link>&nbsp;

        </div>
    )
}

export default PatientConv;