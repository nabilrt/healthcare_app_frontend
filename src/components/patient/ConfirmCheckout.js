import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientHeader from "../headers/PatientHeader";

const ConfirmCheckout=()=>{

    return(
        <div className="container">
            <br/>
            <PatientHeader/>
            <br/>
            <h4>Purchase Successful</h4>
        </div>
    )
}
export default ConfirmCheckout;