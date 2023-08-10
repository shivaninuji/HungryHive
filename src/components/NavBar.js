import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import{ Link } from 'react-router-dom'

const NavBar = () => {
  return ( 
    <>
   
        <nav className="navbar shadow navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className=" logoname" to="/"><img className='logo' src='/logo.jpg'/>HungryHive</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 px-4 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/details" className="nav-link active" aria-current="page" >About</Link>
        </li>
        <li className="nav-item">
          <Link to="/create" className="nav-link active" aria-current="page" >Contact</Link>
        </li>
    
      </ul>
      <ul className="navbar-nav flex">
      
          <Link to="/login" className="nav-link active" aria-current="page" >Login</Link>
          <Link className="nav-link active" to="/signup">
          Signup
                            </Link>
       
    
      </ul>
     
    </div>
  </div>
</nav>
    </>

  )
}

export default NavBar