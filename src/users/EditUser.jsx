import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
    const {id} = useParams();
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
    
    useEffect(()=>{
        loadUser();
    },[])

    const onSubmit = async (e)=>{
        e.preventDefault();
       await axios.put(`http://localhost:8080/user/${id}`,user);
       nagivate("/");
    }

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data)
    }

    

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Edit User</h1>
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
            <button type="submit" className="btn btn-outline-primary">Edit</button>
            
                <Link to="/"  className="btn btn-outline-danger mx-2">Cancle</Link>
            
        </div>
        </form>
      </div>
    </>
  );
};

export default EditUser;
