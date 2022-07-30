import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div className="container">
            <br/>
            <div className="btn-group">
                <Link to="/home" className="btn btn-outline-primary">Home</Link>
                <Link to="/register" className="btn btn-outline-primary">Register</Link>
                <Link to="/login" className="btn btn-outline-primary">Login</Link>
                <Link to="/about" className="btn btn-outline-primary">About</Link>
            </div>
        </div>

    )
}

export default Navbar;