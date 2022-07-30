import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";

const About = () =>{

    return (
        <div className="container">

            <br/>
            <h4>
              AS Health Care App Developers
            </h4> <br/>
            <table className="table table-bordered table-primary">
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                </tr>
                <tr>
                    <td>Abidur Rahman Nabil</td>
                    <td>19-41607-3</td>
                </tr>
                <tr>
                    <td>Arpita Datta</td>
                    <td>19-41608-3</td>
                </tr>
                <tr>
                    <td>Ashraful Islam Adhir</td>
                    <td>19-41687-3</td>
                </tr>
                <tr>
                    <td>Abdullah Al Noman</td>
                    <td>19-41330-3</td>
                </tr>

            </table> <br/>

            This project's backed runs on laravel server.

        </div>
    )
}

export default About;