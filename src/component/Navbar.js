import React from 'react'
import './Navbar.Modules.css'
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary " id='navbar'>
  <div className="container">
    <Link className="navbar-brand" to="/" id='logo'>
      <span className='Travel'>T</span>ravel
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span><i className='fa-solid fa-bars'></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Home">
            Home
          </Link>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#book">Book</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#packages">packages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#gallary">Gallary</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>


        {/* slide */}
        <li className="nav-item">
          <Link className="nav-link" to="/TextUtil">Text</Link>
        </li>
       
        
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Navbar