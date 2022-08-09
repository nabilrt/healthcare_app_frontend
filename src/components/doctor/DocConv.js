import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const DocConv = () =>{

    const {id}=useParams();
    const [convos,setConvos]=useState([]);
    const [rep,setRep]=useState(false);
    let history=useNavigate();

    useEffect(()=>{

        axios.get('http://127.0.0.1:8000/api/doctor/convo/'+id).then(resp=>{
            console.log(resp.data);
            setConvos(resp.data);
        }).catch(
            err=>{
                console.log(err);
            });

    },[]);

    const finishAppointment = () => {

        axios.get('http://127.0.0.1:8000/api/doctor/appointment/finish/'+id).then(resp=>{
            console.log(resp.data);
            history('/doctor/inbox');
        }).catch(
            err=>{
                console.log(err);
            });


    }

    return (
        <div className="container">

            <h5>Conversation</h5>
            <table className="table table-sm">
                <thead>
                <tr>
                    <th>Patient ID</th>
                    <th>Message</th>
                    <th>Reply</th>
                    <th>Action</th>

                </tr>
                </thead>
               <tbody>
               {
                   convos.map((item, i) => (
                       <tr key={i} className="table-hover table-sm">
                           <td>{item.patient_id}</td>
                           <td>{item.message}</td>
                           <td>{item.reply}</td>
                           <td>{ item.reply==="" ? <Link to={'/doctor/conversation/reply/'+item.conv_id}> <i className="icon material-symbols-outlined">
                               reply
                           </i>                    </Link> : "" }</td>
                           <br/>
                       </tr>
                   ))
               }
               </tbody>

            </table> <br/>
            <Link to={"/doctor/conversation/message/new/"+id} className="btn btn-outline-success btn-sm"><i className="icon material-symbols-outlined">add</i></Link>&nbsp;
            <button className="btn btn-outline-danger btn-sm" onClick={finishAppointment}><i className="icon material-symbols-outlined">check_circle_outline</i></button>
        </div>
    )
}

export default DocConv;