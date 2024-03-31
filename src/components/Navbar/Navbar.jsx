 import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Images/photo_2024-02-20_18-41-52.jpg'
import './Navbar.css'
import { navContext } from '../Context/NavContext.jsx'
import './Navbar.css'
import Notifcation from '../Notifcation/Notifcation.jsx'

export default function Navbar() {
  // console.log(document.getElementById("root"));
let {darkMode,hideNotiList}=useContext(navContext)
 
  return  <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top d-flex  z-9">
  <div className="container">
    <Link className="navbar-brand logo" to="/"><img src={logo} alt='page logo' className='w-50 ps-4'/></Link>
    <button className="navbar-toggler border-primary shadow-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-burger fs-5 text-primary"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link home text-primary" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary" to="/about">Aboute</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary" to="/subjects">Subjects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary" to="/profile">Profile</Link>
        </li>
        
        
        
      </ul>
      <ul className="navbar-nav d-flex align-items-center justify-content-center ms-auto mb-lg-0 pointer">
      <li className="nav-item d-flex align-items-center justify-content-center text-primary nav-link">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          
            <i className="fa-solid fa-magnifying-glass"></i>
            
            
        </li>
        
        <li className="nav-item text-primary nav-link pointer " onClick={
          ()=>{hideNotiList()}
        }>
          <i className="fa-regular fa-bell"></i>
        </li>


        <li className="nav-item text-primary nav-link pointer" onClick={()=>{ darkMode()}}>
          
            <i className="fa-solid fa-sun"></i>
            
        </li>



        <li className="nav-item text-primary nav-link pointer">
          <i className="fa-solid fa-right-from-bracket"></i>
        </li>
      </ul>
      
    </div>
  </div>
</nav>  
<Notifcation/>
  
  </>
  
}
