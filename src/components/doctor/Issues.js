import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const Issues = () =>{
    const{id}=useParams();
    const[issues,setIssues]=useState([]);

    useEffect(()=>{

        axios.get('http://127.0.0.1:8000/api/doctor/medical/history/'+id).then(resp=>{
            console.log(resp.data);
            setIssues(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });
    },[]);

    return(
        <div className="container">
            <h4>Issues</h4> <br/>
            {
                issues.map((issue)=>(
                        <>
                            <li>{issue.problems}</li>
                            <br/>
                        </>
                    )
                )
            }
        </div>
    )

}

export default Issues;