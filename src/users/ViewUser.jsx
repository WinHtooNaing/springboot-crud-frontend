import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewUser = () => {
    const {id} = useParams();

    
    const [user,setUser] = useState({
        name : "",
        username : "",
        email : ""
    })
    useEffect(()=>{
        loadUser()
    },[]);
    const loadUser = async() =>{
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data)
    }
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">User Detail</h2>
                <ul>
                <li>Name : {user.name}</li>
                <li>Username : {user.username}</li>
                <li>Email : {user.email}</li>
            </ul>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default ViewUser
