import React, {useEffect, useState} from "react";
import axios from "axios";

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
            <h4>Notices For Doctor</h4> <br/>
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
export default DocNotice;
