import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateNotice=()=>{
    const [noticeFor,setNoticeFor]=useState("");
    const [message,setMessage]=useState("");
    let history=useNavigate();
    var obj={notice_for:noticeFor,message:message};

    const sendNotice=()=>{

        axios.post('http://127.0.0.1:8000/api/admin/notice/add', obj).then(resp => {
            console.log(resp.data);
            history("/admin/notices/all");

        }).catch(
            err => {
                // history('/login');
                console.log(err.response.data);
            });

    }

    return(
        <div className="container">

            <h4>Give Notice to Users</h4>
            <form action="" className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="notice_for" className="form-label">Notice For</label>
                    <select name="" id="notice_for" className="form-select" value={noticeFor} onChange={(e)=>setNoticeFor(e.target.value)}>
                        <option value="">Choose An Option</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Patient">Patient</option>
                        <option value="Seller">Seller</option>
                    </select>
                </div>
                <div className="col-md-12">
                    <label htmlFor="msg" className="form-label">Message</label>
                    <textarea name="" id="msg" value={message} onChange={(e)=>setMessage(e.target.value)} className="form-control" cols="30" rows="10"></textarea>
                </div>
            </form> <br/>
            <button className="btn btn-outline-success" onClick={sendNotice}>Send</button>
        </div>
    )

}
export default CreateNotice;