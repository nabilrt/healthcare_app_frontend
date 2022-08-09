import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import {Link} from "react-router-dom";

const Shop = () =>{
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

            <h4>Search Medicines</h4> <br/>
            <form action="">
                <label htmlFor="key" className="form-label">Search by Name</label>
                <input type="text" name="" id="key" value={key} onChange={(e)=>setKey(e.target.value)} onKeyUp={searchMedicine} className="form-control"/>
            </form> <br/>
            <table className="table table-hover table-sm">
                <thead>
                <tr >
                    <th >Medicine ID</th>
                    <th >Name</th>
                    <th >Type</th>
                    <th >Quantity</th>
                    <th >Unit Price</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    medicines.map((item, i) => (
                        <tr key={i}>
                            <td>{item.medicine_id}</td>
                            <td>{item.medicine_name}</td>
                            <td>{item.medicine_type}</td>
                            <td>{item.quantity}</td>
                            <td>{item.medicine_price}$</td>
                            <td><Link to={"/patient/cart/add/"+item.medicine_id} className="btn btn-outline-warning btn-sm"><i className="icon material-symbols-outlined">add_shopping_cart</i></Link></td>

                            <br/>
                        </tr>
                    ))
                }
                </tbody>


            </table>

        </div>
    )
}

export default Shop;