import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const BlockPatient=()=>{
    const{id}=useParams();
    const[remark,setRemark]=useState("");
    var obj={id:id,remark:remark};
    let history=useNavigate();

    const blockPatient=()=>{

        axios.post('http://127.0.0.1:8000/api/admin/patient/block/remark', obj).then(resp => {
            console.log(resp.data);
            history("/admin/patients/valid");

        }).catch(
            err => {
                // history('/login');
                console.log(err.response.data);
            });

    }

    return(
        <div className="container">
            <br/>
            <h4>Block Remark</h4>
            <div className="mb-3">
                <form action="">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Remark</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="remark" rows="3" value={remark} onChange={(e)=>setRemark(e.target.value)}>

                </textarea>
                </form>
            </div> <br/>
            <button className="btn btn-outline-dark" onClick={blockPatient}>Block Patient</button>

        </div>
    )





}

export default BlockPatient;