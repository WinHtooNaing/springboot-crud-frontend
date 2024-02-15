import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
    const nagivate = useNavigate();

    const [user,setUser] = useState({
        name : "",
        username : "",
        email : ""
    })
    const {name,username,email} = user;

    const OnInputChange = (e) =>{
            setUser({...user,[e.target.name] : e.target.value})
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
       await axios.post("http://localhost:8080/user",user);
       nagivate("/");
    }

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Add New User</h1>
      <div
        className='container border border-primary'
        style={{ marginTop: "50px" }}
      >
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={(e)=>OnInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={(e)=>OnInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e)=>OnInputChange(e)}
          />
        </div>
        <div className="container p-2">
            <button type="submit" className="btn btn-outline-primary">Add</button>
            
                <Link to="/"  className="btn btn-outline-danger mx-2">Cancle</Link>
            
        </div>
        </form>
      </div>
    </>
  );
};

export default AddUser;
