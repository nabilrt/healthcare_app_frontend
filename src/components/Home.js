import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicHeader from "./headers/BasicHeader";


const Home = () => {

    return (
        <div className="container">
            <br/>
            <BasicHeader></BasicHeader>
            <br/>
            <h4>Welcome to AS Health Care App</h4> <br/>
            <h6>We are always trying to give you the best service</h6> <br/>

        </div>
    )
}

export default Home;