import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";


const DocReply = () =>{
    const {id}=useParams();
    const[reply,setReply]=useState("");
    let history=useNavigate();

    const sendReply = () =>{

        console.log(reply);
        let obj={reply:reply,c_id:id};
        axios.post("http://127.0.0.1:8000/api/doctor/convo/reply",obj)
            .then(resp=>{
                history("/doctor/conversation/"+id);
            }).catch(err=>{
            console.log(err.response.data);
        });

    }

    return(
        <div className="container">
            <h4>Reply</h4>
            <form action="">
                <label htmlFor="reply" className="form-label">Reply Message</label>
                <input type="text" name="" id="reply" className="form-control" value={reply} onChange={(e)=>setReply(e.target.value)}/>

            </form> <br/>
            <button className="btn btn-outline-dark" onClick={sendReply}>Reply</button>

        </div>
    )
}

export default DocReply;