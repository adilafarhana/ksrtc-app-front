import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavUser from './NavUser'

const AddUser = () => {
    const [data,setData]=useState({
        "name":"",
        "email":"",
        "phone":"",
        "gender":"",
        "password":"",
    })
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/reg",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                } else {
                    alert(Error)
                }
            }
        )
    }
  return (
    <div>
        <NavUser/>
        <div className="container">
            <h1 align="center">ADD USER</h1><br></br><br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                    <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                        </div>
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control"  name='phone' value={data.phone} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">gender</label>
                            <input type="text" className="form-control"  name='gender' value={data.gender} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control"  name='password' value={data.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirmpassword</label>
                            <input type="password" className="form-control"  name='confirmpassword' value={data.confirmpassword} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12"><center>
                            <button className="btn btn-primary" onClick={readValue}>ADD USER</button></center>
                           <br></br> <center><p><b>Back to login</b><br></br><Link to="/addbus">Go back</Link></p></center>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser