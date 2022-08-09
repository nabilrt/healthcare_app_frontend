import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";

const ManageNotices=()=>{
    const[notices,setNotices]=useState([]);

    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/admin/notices').then(resp=>{
            console.log(resp.data);
            setNotices(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);

    return(
        <div className="container">
            <h4>Manage Notices</h4> <br/>
            <table className="table table-hover table-sm">
                <thead>
                <tr>
                    <th>Notice ID</th>
                    <th>Message</th>
                    <th>For</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    notices.map((item, i) => (
                        <tr key={i}>
                            <td>{item.notice_id}</td>
                            <td>{item.message}</td>
                            <td>{item.notice_for}</td>
                            <td><Link to={"/admin/notice/delete/"+item.notice_id} className="btn btn-outline-danger btn-sm"><i className="icon material-symbols-outlined">clear</i></Link></td>
                            <br/>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )

}

export default ManageNotices;