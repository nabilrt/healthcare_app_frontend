import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {bindReporter} from "web-vitals/dist/modules/lib/bindReporter";
import Header from "./Header";

function Footer(props){

    return(

        <div>


            <div className="container border-danger position-absolute bottom-0 text-center">

                <h4>Copyright	&#169; AS Health Care App </h4>
            </div>

        </div>



    )

}

export default Footer;