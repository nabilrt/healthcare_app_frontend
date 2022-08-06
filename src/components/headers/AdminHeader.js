import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const AdminHeader=()=>{

    return(
        <div className="container">
            <br/>
            <div className="btn-group">
                <Link to="/admin/dashboard" className="btn btn-outline-primary">Dashboard</Link>
                <Link to="/admin/expense/create" className="btn btn-outline-primary">Create Expense</Link>
                <Link to="/admin/expenses/all" className="btn btn-outline-primary">Manage Expenses</Link>
                <Link to="/admin/doctors/valid" className="btn btn-outline-primary">Doctors</Link>
                <Link to="/admin/doctors/blocked" className="btn btn-outline-primary">Blocked Doctors</Link>
                <Link to="/admin/patients/valid" className="btn btn-outline-primary">Patients</Link>
                <Link to="/admin/patients/blocked" className="btn btn-outline-primary">Blocked Patients</Link>
                <Link to="/admin/notice/create" className="btn btn-outline-primary">Create Notice</Link>
                <Link to="/admin/notices/all" className="btn btn-outline-primary">Manage Notices</Link>
                <Link to="/admin/profile" className="btn btn-outline-primary">Profile</Link>
                <Link to="/logout" className="btn btn-outline-primary">Logout</Link>
            </div>
        </div>
    )
}

export default AdminHeader;