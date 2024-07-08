import React, { useState } from 'react'
import style from './Mararila.module.css'
import image from '../../assets/Images/unnamed.webp'
import { Helmet } from 'react-helmet'
export default function Matarilas() {

  
  return (
    <div>
      <Helmet>
    <meta name="description" content="About your subjects Matarilas" />
    <title>
      subjects Matarilas
    </title>
  </Helmet>
     
     <div className="row">
        <div className="col-md-4">
        <div className={`${style.pdf} rounded  py-5 position-relative shadow`}>
        <img src={image} alt="" className=' w-100' />
        <div className={`${style.layer} w-100  justify-content-center align-items-center position-absolute top-0 bottom-0 pointer`}>
          
          <i class="fa-solid fa-download text-white  fs-2"></i>
          
        </div>
      </div>
        </div>
      </div>
      
    
    </div>
  )
}
