import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const PatientHeader=()=>{

    return(
        <div className="container">
            <br/>
            <div className="btn-group">
                <Link to="/patient/dashboard" className="btn btn-outline-primary">Dashboard</Link>
                <Link to="/patient/inbox" className="btn btn-outline-primary">Inbox</Link>
                <Link to="/patient/membership/info" className="btn btn-outline-primary">Membership</Link>
                <Link to="/patient/doctors/all" className="btn btn-outline-primary">Doctors</Link>
                <Link to="/patient/shop" className="btn btn-outline-primary">Shop</Link>
                <Link to="/patient/cart" className="btn btn-outline-primary">Cart</Link>
                <Link to="/patient/orders" className="btn btn-outline-primary">Order History</Link>
                <Link to="/patient/notices" className="btn btn-outline-primary">Notices</Link>
                <Link to="/patient/review/post" className="btn btn-outline-primary">Review</Link>
                <Link to="/patient/profile" className="btn btn-outline-primary">Profile</Link>
                <Link to="/patient/dash" className="btn btn-outline-primary">Dash</Link>
                <Link to="/logout" className="btn btn-outline-primary">Logout</Link>
            </div>

        </div>
    )

}

export default PatientHeader;