import axios from 'axios'
import React, { useState } from 'react'
import { headers } from '../../next.config'
import DynamicTable from '@/components/DynamicTable'

const getstatistics = () => {
  const [sales, setSales] = useState([])
  const [purchases, setPurchases] = useState([])
  const [edate, setEdate] = useState()
  const [sdate, setSdate] = useState()
  const [fetched, setFetched] = useState(false)
  const getdata = async() => {
    const response = await axios.get("http://localhost:5000/getsalepurchase", {
      headers: {
          "edate": edate,
          "sdate": sdate,
      }
    });
    console.log(response.data);
    setSales(response.data.sales);
    setPurchases(response.data.purchases);
    setFetched(true);
  }
  return (
    <div className='w-screen h-screen'>
        <nav className="navbar navbar-expand-lg navbar-light bg-success p-3 text-white bg-opacity-50">
          <div className="container-fluid">
            <a className="navbar-brand text-dark" href="/">
              BAS
            </a>
            <div
              className="navbar-collapse position-absolute top-50 start-50 translate-middle"
              id="navbarSupportedContent"
            >
              <div className="nav-item text-light fs-3 fw-bold">
                BookShop Automation Software
              </div>
            </div>
            <a className="navbar-brand text-light" href="/">
              <button type="button" className="btn btn-secondary btn-lg">
                Log Out
              </button>
            </a>
          </div>
        </nav>
      <div className='w-full h-[92%] bg-[#C0DBEA] flex flex-col flex-wrap justify-evenly items-center'>
        <label for="sdate">Start Date</label>
        <input id='sdate' type='date' onChange={(e)=>{setSdate(e.target.value)}}/>
        <label for="edate">End Date</label>
        <input id='edate' type='date' onChange={(e)=>{setEdate(e.target.value)}}/>
        <button onClick={getdata}>Get Data</button>
        {fetched?
        <>
        <DynamicTable
          TableData = {sales}
        />
        <DynamicTable
          TableData = {purchases}
        />
        </>:
        <></>}
      </div>
    </div>
  )
}

export default getstatistics