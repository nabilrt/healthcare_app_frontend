import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicHeader from "./headers/BasicHeader";

const ConfirmationSupport=()=>{

    return(
        <div className="container">
            <br/>
            <BasicHeader></BasicHeader>
            <br/>
            <h6>Email Sent Successfully</h6>
            <small>Please Wait For Response</small>
        </div>
    )

}

export default ConfirmationSupport;