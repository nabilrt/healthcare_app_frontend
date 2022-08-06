import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientHeader from "../headers/PatientHeader";

const Shop = () =>{

    return(
        <div className="container">
            <br/>
            <PatientHeader/>
            <br/>
            <h4>Shop</h4>
            <small>Patient can buy medicine</small> <br/>
        </div>
    )
}

export default Shop;