import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
const PatientConv = () =>{

    const {id}=useParams();
    const [convos,setConvos]=useState([]);
    const [rep,setRep]=useState(false);
    const[name,setName]=useState("");
    let history=useNavigate();

    useEffect(()=>{

        axios.get('http://127.0.0.1:8000/api/patient/convo/'+id).then(resp=>{
            console.log(resp.data);
            setConvos(resp.data.conv);
            setName(resp.data.name);
        }).catch(
            err=>{
                console.log(err);
            });

    },[]);
    return (
        <div className="container">

            <h5>Conversation with {name}</h5>
            <table className="table table-hover table-sm">
                <thead>
                <tr>
                    <th>Conversation ID</th>
                    <th>Doctor ID</th>
                    <th>Message</th>
                    <th>Reply</th>
                    <th>Action</th>

                </tr>
                </thead>
                <tbody>
                {
                    convos.map((item, i) => (
                        <tr key={i}>
                            <td>{item.conv_id}</td>
                            <td>{item.doctor_id}</td>
                            <td>{item.message}</td>
                            <td>{item.reply}</td>
                            <td>{item.reply==="" ? <Link to={'/patient/conversation/reply/'+item.conv_id}><i className="icon material-symbols-outlined">
                                reply
                            </i></Link> : ""}</td>
                            <br/>
                        </tr>
                    ))
                }
                </tbody>


            </table> <br/>
            <Link to={"/patient/conversation/message/new/"+id} className="btn btn-outline-success btn-sm"><i className="icon material-symbols-outlined">add</i></Link>&nbsp;

        </div>
    )
}

export default PatientConv;