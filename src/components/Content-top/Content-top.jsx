import React, { useContext } from 'react'
import './Content-top.css'
import { sidebarContext } from '../Context/sidebarContext'

export default function ContentTop() {
  const {toggleSidebar}=useContext(sidebarContext)
  // console.log(toggleSidebar);
  return <div className='nav-content d-flex align-items-center pe-4 z-0 justify-content-between bg-primary  '>
        <div className="content-top bg-primary" >
        <button className='btn btn-primary d-flex align-items-center mx-3 justify-content-center p-2' onClick={()=>toggleSidebar()}>
        <i class="fa-solid fa-arrow-down me-3 fs-2"></i>
    <span className="h3 fw-bold">Subjects</span>
    </button>


        </div>
        <div className="contentMain-head d-flex align-items-center gap-2">
    <button className='btn btn-primary '>
      Matrials

    </button>
    <button className='btn btn-primary '>
      Posts

    </button>
    <button className='btn btn-primary '>
      Exams

    </button>



  </div>
   
  
  
  </div>
}
