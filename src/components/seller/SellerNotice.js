import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";


const SellerNotice = () => {
    const[notices,setNotices]=useState([]);
    let history=useNavigate();
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    axios.defaults.headers.common["Authorization"] = obj.token;
    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/seller/notices',notices).then(resp=>{
            console.log(resp.data);
            setNotices(resp.data);

        }).catch(
            err=>{
                history('/login');
                console.log(err.response.data);
            });

    },[]);

    return(

        <div className="container">

            <h4>Notices For Seller</h4> <br/>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Notice ID</th>
                    <th>Message</th>
                </tr>
                </thead>
                <tbody>
                {
                    notices.map((item, i) => (
                        <tr key={i} className="table table-sm">
                            <td>{item.notice_id}</td>
                            <td>{item.message}</td>
                            <br/>
                        </tr>
                    ))
                }
                </tbody>

            </table>

        </div>
    )

}
export default SellerNotice;
