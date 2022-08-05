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
            <br/>
            <h4>Manage Notices</h4> <br/>
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Notice ID</th>
                    <th className="table-primary">Message</th>
                    <th className="table-primary">For</th>
                    <th></th>
                </tr>
                {
                    notices.map((item, i) => (
                        <tr key={i}>
                            <td>{item.notice_id}</td>
                            <td>{item.message}</td>
                            <td>{item.notice_for}</td>
                            <td><Link to={"/admin/notice/delete/"+item.notice_id} className="btn btn-outline-danger">Delete</Link></td>
                            <br/>
                        </tr>
                    ))
                }
            </table>

        </div>
    )

}

export default ManageNotices;