import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const SellerHeader=()=>{

    return(
        <div className="container">
            <br/>
            <div className="btn-group">
                <Link to="/seller/dashboard" className="btn btn-outline-primary">Dashboard</Link>
                <Link to="/seller/earnings" className="btn btn-outline-primary">Earnings</Link>
                <Link to="/seller/medicines/add" className="btn btn-outline-primary">Add Medicines</Link>
                <Link to="/seller/medicines/all" className="btn btn-outline-primary">Manage Medicines</Link>
                <Link to="/seller/medicine/search" className="btn btn-outline-primary">Search Medicine</Link>
                <Link to="/seller/order/history" className="btn btn-outline-primary">Order History</Link>
                <Link to="/seller/notices" className="btn btn-outline-primary">Notice</Link>
                <Link to="/seller/pr" className="btn btn-outline-primary">Profile</Link>
                <Link to="/logout" className="btn btn-outline-primary">Logout</Link>
            </div>
        </div>
    )

}

export default SellerHeader;