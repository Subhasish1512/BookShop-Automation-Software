import React, { useEffect, useState } from "react";
import axios from "axios";

const addoldbook = () => {
    const [book, setbook] = useState("");
    const [quan, setquan] = useState(0);
    const [bookset, setbookset] = useState({});
    const [booklist, setbooklist] = useState([]);
    const getbooks = async() => {
        const response = await axios.get("http://localhost:5000/getbook", {
            headers: {
                "params": "ISBN",
                "query": "",
            }
        }) 
        console.log(response.data);
        setbooklist(response.data);
    }
    const addBookset = () =>{
        if(book==""||quan==0){
            alert("Please Insert Some Value to Proceed");
            return;
        }
        if(bookset[book]){
            setbookset({...bookset,  [book]: bookset[book]+Number(quan)});
        } else {
            setbookset({...bookset,  [book] : Number(quan)});
        }
        setbook("")
        setquan(0);
        console.log(bookset)
    }
    const deleteorder = (e) => {
        // bookset[e] = undefined;
        // delete bookset[e];
        const {[e]: removedObject, ...restbookset } = bookset
        console.log(restbookset);
        setbookset(restbookset);
    }
    const updateInventory = async() => {
        const update = await axios.post("http://localhost:5000/purchasebook", {"bookorders": bookset, "totalInvoice": 500});
        if(update.status==200){
            console.log(update.data);
        }
        setbookset({});
    }
    useEffect(() => {
      getbooks();   
    }, [])
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
        <div className="g d-flex flex-column gap-1 col-4 mx-auto">
            <div className="mb-3 row fw-bold">
                <label for="staticEmail" className="col-sm-2 col-form-label">ISBN number</label>
                <div class="col-sm-10">
                <input type="text" list="booklist" placeholder="Select Book" value={book} className="form-control" id="FormControlInput1" onChange={(e)=>{setbook(e.target.value)}}/>
                {booklist?<datalist id="booklist">
                    {booklist.map((bookkey)=>{
                        return(
                            <>
                                <option value={bookkey.ISBN}>{bookkey.name}</option>
                            </>
                        )
                    })}
                </datalist>:<></>}
                </div>
            </div>
            <div className="mb-3 row fw-bold">
                <label for="inputPassword" className="col-sm-2 col-form-label">Quantity</label>
                <div class="col-sm-10">
                <input type="number" className="form-control" id="FormControlInput2" value={quan} onChange={(e)=>{setquan(e.target.value)}}/>
                </div>
            </div>

            <div className="d-flex flex-column align-items-center justify-content-evenly">
                {Object.keys(bookset).map((bookkey)=>{
                    return(
                        <div className="d-flex flex-row col-4 align-items-center justify-content-evenly"> 
                          <button onClick={()=>{deleteorder(bookkey)}}>x</button>
                          <div>{bookkey}</div>  
                          <div>{bookset[bookkey]}</div>  
                        </div>  
                    );
                })}
            </div>
            
            <div className="d-flex flex-row align-items-center justify-content-evenly ">
                <button onClick={addBookset} class="btn btn-primary ">Add</button>
                <button onClick={updateInventory} class="btn btn-primary ">Update Inventory</button>
            </div>

        </div>
        </nav>
        </div>
        </>
    )
}

export default addoldbook;