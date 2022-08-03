import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";

const DocNotice = () => {
    const[notices,setNotices]=useState([]);
    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/doctor/notices',notices).then(resp=>{
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
            <h4>Notices For Doctor</h4> <br/>
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Notice ID</th>
                    <th className="table-primary">Message</th>
                </tr>
                {
                    notices.map((item, i) => (
                        <tr key={i}>
                            <td>{item.notice_id}</td>
                            <td>{item.message}</td>
                            <br/>
                        </tr>
                    ))
                }
            </table>

        </div>
    )

}
export default DocNotice;
