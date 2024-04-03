import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'
import Notifcation from '../Notifcation/Notifcation.jsx'

export default function Layout() {
  return <>
  <Navbar/>
  <div className="container">
  
  <Outlet>
  

    </Outlet>

  
  
  <Footer/>
  </div>
  
  </>
  
}
