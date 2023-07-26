import axios from "axios";
import React, { useState } from "react";

const addnewbook = () => {
    const [formData, setFormData] = useState({
        name: "",
        ISBN: "",
        quantity: 0,
        shelf: "",
        publisher: "",
        author: "",
        price: 0,
        publisherAddress: "",  
    });
    const addbook = async(e) => {
        console.log(formData);
        const response = await axios.post("http://localhost:5000/addbook", formData);
        console.log(response.data);
        setFormData({
            name: "",
            ISBN: "",
            quantity: 0,
            shelf: "",
            publisher: "",
            author: "",
            price: 0,
            publisherAddress: "",  
        })
        alert("Book Added");  
    }
    return(
        <>
            <div className="d-flex flex-column bd-highlight mb-3" >
        <nav className="navbar navbar-expand-lg navbar-light bg-success p-2 text-white bg-opacity-50">
            <div className="container-fluid">
                <a className="navbar-brand text-dark" href="/">BAS</a>
                <div className="navbar-collapse position-absolute top-50 start-50 translate-middle" id="navbarSupportedContent">
                <div className="nav-item text-light fs-3 fw-bold">
                    BookShop Automation Software
                </div>
                </div>   
                <a className="navbar-brand text-light" href="/"><button type="button" className="btn btn-secondary btn-lg">Log Out</button></a>
            </div>
        </nav>
        <nav className="f d-flex p-2 bd-highlight bg-light grow-1">
        <div className="g d-flex flex-column gap-1 col-6 mx-auto">
            <div className="mb-3 row fw-bold">
                <label for="staticEmail" className="col-sm-2 col-form-label">Book Name</label>
                <div class="col-sm-10">
                <input type="text" value={formData.name} className="form-control" id="FormControlInput1" onChange={(e)=>{setFormData({...formData,name: e.target.value})}}/>
                </div>
            </div>
            <div className="mb-3 row fw-bold">
                <label for="inputPassword" className="col-sm-2 col-form-label">Author Name</label>
                <div class="col-sm-10">
                <input type="text" value = {formData.author} className="form-control" id="FormControlInput2" onChange={(e)=>{setFormData({...formData,author: e.target.value})}}/>
                </div>
            </div>
            <div className="mb-3 row fw-bold">
                <label for="inputPassword" className="col-sm-2 col-form-label">ISBN Number</label>
                <div class="col-sm-10">
                <input type="text" value={formData.ISBN}className="form-control" id="FormControlInput3" onChange={(e)=>{setFormData({...formData,ISBN: e.target.value})}}/>
                </div>
            </div>
            <div className="mb-3 row fw-bold">
                <label for="inputPassword" className="col-sm-2 col-form-label">Publisher Name</label>
                <div class="col-sm-10">
                <input type="text" value={formData.publisher}className="form-control" id="FormControlInput4" onChange={(e)=>{setFormData({...formData,publisher: e.target.value})}}/>
                </div>
            </div>
            <div className="mb-3 row fw-bold">
                <label for="inputPassword" className="col-sm-2 col-form-label">Publisher Address</label>
                <div class="col-sm-10">
                <input type="text" value={formData.publisherAddress} className="form-control" id="FormControlInput5" onChange={(e)=>{setFormData({...formData,publisherAddress: e.target.value})}}/>
                </div>
            </div>
            <div className=" d-flex flex-row">
                <div className="mb-3 row fw-bold">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Number of Copies</label>
                    <div class="col-sm-10">
                    <input type="number" value={formData.quantity} className="form-control" id="FormControlInput6" onChange={(e)=>{setFormData({...formData,quantity: e.target.value})}}/>
                    </div>
                </div>
                <div className="mb-3 row fw-bold">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Shelf No</label>
                    <div class="col-sm-10">
                    <input type="text" value={formData.shelf}className="form-control" id="FormControlInput7" onChange={(e)=>{setFormData({...formData,shelf: e.target.value})}}/>
                    </div>
                </div>
                <div className="mb-3 row fw-bold">
                    <label for="inputPassword" className="col-sm-2 col-form-label">price</label>
                    <div class="col-sm-10">
                    <input type="number" className="form-control" id="FormControlInput8" onChange={(e)=>{setFormData({...formData,price: e.target.value})}}/>
                    </div>
                </div>
            </div>
            {/* <div className="mb-3 row fw-bold">
                <label for="inputPassword" className="col-sm-2 col-form-label">Self No</label>
                <div class="col-sm-10">
                <input type="text" className="form-control" id="FormControlInput7"/>
                </div>
            </div> */}
            {/* <div className="mb-3 row fw-bold">
                <label for="inputPassword" className="col-sm-2 col-form-label">price</label>
                <div class="col-sm-10">
                <input type="text" className="form-control" id="FormControlInput8"/>
                </div>
            </div> */}
            <div className="d-flex flex-row align-items-center justify-content-evenly ">
                <button onClick={addbook} class="btn btn-primary ">Add</button>
            </div>
        </div>
        </nav>
        </div>
        </>
    )
}

export default addnewbook;