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
                            <label htmlFor="" className="form-label"></label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} placeholder='enter your username'/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"></label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}  placeholder='enter your email' />
                        </div>
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"></label>
                            <input type="text" className="form-control"  name='phone' value={data.phone} onChange={inputHandler} placeholder='enter your phone number'/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"></label>
                            <select name="gender" id="" className="form-control"  value={data.gender} onChange={inputHandler} placeholder='select your gender'>
                                <option value="male">male</option>
                                <option value="female">female</option>
                                <option value="other">other</option>
                            </select>
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"></label>
                            <input type="password" className="form-control"  name='password' value={data.password} onChange={inputHandler} placeholder='enter password'/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"></label>
                            <input type="password" className="form-control"  name='confirmpassword' value={data.confirmpassword} onChange={inputHandler}placeholder='enter confirm password'/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12"><center>
                            <button className="btn btn-primary" onClick={readValue}>ADD USER</button></center>
                           <br></br> <center><p><b>Back to login</b><br></br><Link to="/adduser">Go back</Link></p></center>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser