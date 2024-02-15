import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Fullstack Application with React and Spring Boot</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <NavLink to="/adduser"><button className="btn btn-outline-light">
     Add User
     </button></NavLink>
  </div>
</nav>
    </>
  )
}

export default Navbar
