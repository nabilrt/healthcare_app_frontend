import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Support=()=>{
    const[id,setID]=useState("");
    const [error,setError]=useState("");
    let history=useNavigate();
    var obj={id:id};

    const sendReq=()=>{

        axios.post('http://127.0.0.1:8000/api/contact/user',obj).then(resp=>{
            console.log(resp.data);
            if(resp.data==="Sent"){
                history('/contact/support/confirm');
            }else{
                setError("ID Does not Exist");
            }


        }).catch(
            err=>{
                console.log(err.response.data);
            });

    }

    return(

        <div className="container">

            <h4>Contact Support</h4> <br/>
            <form action="">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">User ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="id"
                        placeholder="Enter your ID"
                        value={id}
                        onChange={(e)=>setID(e.target.value)}
                        autoFocus
                    />
                </div>
            </form> <br/>
            <span className="text-danger">{error}</span>
            <br/>
            <button className="btn btn-outline-dark" onClick={sendReq}>Send Request</button>
        </div>


    )

}
export default Support;