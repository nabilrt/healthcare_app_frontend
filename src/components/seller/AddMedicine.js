import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddMedicine = () =>{
    const[name,setName]=useState("");
    const[type,setType]=useState("");
    const[quantity,setQuantity]=useState("");
    const[price,setPrice]=useState("");
    var obj={name:name,type:type,quantity:quantity,price:price};
    let history=useNavigate();

    const addMedicine = () =>{
        console.log(name);
        console.log(type);
        console.log(quantity);
        console.log(price);

        axios.post('http://127.0.0.1:8000/api/seller/medicine/add', obj).then(resp => {
            console.log(resp.data);
            history("/seller/medicines/all");

        }).catch(
            err => {
               // history('/login');
                console.log(err.response.data);
            });

    }

    return(
        <div className="container">

            <h4>Add Medicines</h4> <br/>
            <form action="" className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Medicine Name</label>
                    <input type="text" name="" id="name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="type" className="form-label">Medicine Type</label>
                    <select name="" id="" value={type} onChange={(e)=>setType(e.target.value)} className="form-select">
                        <option value="">Choose an Option</option>
                        <option value="Tablet">Tablet</option>
                        <option value="Injection">Injection</option>
                        <option value="Capsule">Capsule</option>
                        <option value="Saline">Saline</option>
                        <option value="Dispencer">Dispencer</option>
                        <option value="Syrup">Syrup</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input type="number" name="" id="" value={quantity} onChange={(e)=>setQuantity(e.target.value)} className="form-control"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="unit_price" className="form-label">Price Per Unit</label>
                    <input type="text" name="" id="unit_price" value={price} onChange={(e)=>setPrice(e.target.value)} className="form-control" />
                </div>

            </form> <br/>
            <button className="btn btn-outline-success" onClick={addMedicine}><i className="icon material-symbols-outlined">add_circle</i></button>
        </div>
    )

}

export default AddMedicine;