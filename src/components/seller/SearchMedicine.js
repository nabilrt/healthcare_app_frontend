import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";

const SearchMedicine = () =>{

    const[medicines,setMedicines]=useState([]);
    const[key,setKey]=useState("");
    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/seller/medicines/all').then(resp=>{
            console.log(resp.data);
            setMedicines(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);

    const searchMedicine = () =>{


        axios.get('http://127.0.0.1:8000/api/seller/medicine/search/'+key).then(resp=>{
            console.log(resp.data);
            setMedicines(resp.data);
        }).catch(
            err=>{
                console.log(err);
            });

    }

    return(
        <div className="container">
            <br/>
            <h4>Search Medicines</h4> <br/>
            <form action="">
                <label htmlFor="key" className="form-label">Search by Name</label>
                <input type="text" name="" id="key" value={key} onChange={(e)=>setKey(e.target.value)} onKeyUp={searchMedicine} className="form-control"/>
            </form> <br/>
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Medicine ID</th>
                    <th className="table-primary">Name</th>
                    <th className="table-primary">Type</th>
                    <th className="table-primary">Quantity</th>
                    <th className="table-primary">Unit Price</th>
                    <th></th>
                    <th></th>
                </tr>
                {
                    medicines.map((item, i) => (
                        <tr key={i}>
                            <td>{item.medicine_id}</td>
                            <td>{item.medicine_name}</td>
                            <td>{item.medicine_type}</td>
                            <td>{item.quantity}</td>
                            <td>{item.medicine_price}$</td>
                            <td><Link to={"/seller/medicine/update/"+item.medicine_id} className="btn btn-outline-warning">Update</Link></td>
                            <td><Link to={"/seller/medicine/delete/"+item.medicine_id} className="btn btn-outline-danger">Delete</Link></td>
                            <br/>
                        </tr>
                    ))
                }
            </table>

        </div>
    )



}
export default SearchMedicine;