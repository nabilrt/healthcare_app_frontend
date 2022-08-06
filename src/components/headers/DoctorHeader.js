import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const DoctorHeader=()=>{

    return(
        <div className="container">
            <br/>
            <div className="btn-group">
                <Link to="/doctor/dashboard" className="btn btn-outline-primary">Dashboard</Link>
                <Link to="/doctor/inbox" className="btn btn-outline-primary">Inbox</Link>
                <Link to="/doctor/earnings" className="btn btn-outline-primary">Earnings</Link>
                <Link to="/doctor/appointments" className="btn btn-outline-primary">Appointments</Link>
                <Link to="/doctor/remuneration" className="btn btn-outline-primary">Remuneration</Link>
                <Link to="/doctor/medical/histories" className="btn btn-outline-primary">Medical History</Link>
                <Link to="/doctor/notices" className="btn btn-outline-primary">Notices</Link>
                <Link to="/doctor/review/post" className="btn btn-outline-primary">Review</Link>
                <Link to="/doctor/profile" className="btn btn-outline-primary">Profile</Link>
                <Link to="/logout" className="btn btn-outline-primary">Logout</Link>
            </div>

        </div>
    )

}

export default DoctorHeader;