import React, { useContext, useEffect, useState } from 'react'
import './Sidebar.css'
import { MyPhoto } from "../../utils/Images.js";
import { sidebarContext } from '../Context/sidebarContext.jsx';
export default function Sidebar() {
    const [activeLinkeIdx]=useState(1)
    const [sidebarClass,setSidebarclass]=useState('')
    const {isSidebarOpen}=useContext(sidebarContext)
    // console.log(isSidebarOpen);
    useEffect(() => {
        if(isSidebarOpen){
          setSidebarclass("sidebar-change")
        }else{
          setSidebarclass('')
        }
        
      }, [isSidebarOpen])
      
  return<>
  
  <div className={`sidebar vh-100 ${sidebarClass}  d-flex flex-column align-items-center justify-content-center `}>
        <div className="sidebar-head d-flex  align-items-center mb-4  py-2">
          <div className="sidebar-head-image image ms-3 overflow-hidden me-3 mb-3">
            <img src={MyPhoto} alt="" className="w-100 shadow " />
          </div>
          <h2 className="h5 fw-bold text-white info-Name  ">Mohamed Ezz</h2>
        </div>
        <div className="sidebar-body mb-5 ">
          <ul>
            <li className="mb-5  nav-item  me-3">
              <select
                class="form-select form-select-sm "
                aria-label="Small select example"
              >
                <option selected>First Year Sub</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">four</option>
                <option value="5">faive</option>
                <option value="6">six</option>
              </select>
            </li>
            <li className="mb-5 nav-item me-3">
              <select
                class="form-select form-select-sm"
                aria-label="Small select example"
              >
                <option selected>Sacend Year Sub</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">four</option>
                <option value="5">faive</option>
                <option value="6">six</option>
              </select>
            </li>
            <li className="mb-5 nav-item me-3">
              <select
                class="form-select form-select-sm"
                aria-label="Small select example"
              >
                <option selected>third Year Sub</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">four</option>
                <option value="5">faive</option>
                <option value="6">six</option>
              </select>
            </li>
            <li className="mb-5 nav-item me-3">
              <select
                class="form-select form-select-sm"
                aria-label="Small select example"
              >
                <option selected>fourist Year Sub</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">four</option>
                <option value="5">faive</option>
                <option value="6">six</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
  
  
  
  </>
}
