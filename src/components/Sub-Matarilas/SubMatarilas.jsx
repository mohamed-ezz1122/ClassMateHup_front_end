import React, { useContext, useState } from 'react'
import style from './SubMararila.module.css'
import { Link } from '@mui/material'
import { Helmet } from 'react-helmet'
import { userContext } from '../Context/userContext'

export default function SubMatarilas() {
  const {token,isAdmin}=useContext(userContext)
    const [isOpen, setIsOpen] = useState(false)
  function showForm(){
  if (isOpen){
    setIsOpen(false)
    document.querySelector('.matrilForm').classList.replace("d-none","d-block")
    // console.log(isOpen);
  } else if(!isOpen){
    
    setIsOpen(true)
    document.querySelector('.matrilForm').classList.replace("d-block","d-none")
    // console.log(isOpen);
  }
   
  }
  return (
    
    <div className=' container'>
      <Helmet>
    <meta name="description" content=" Your subjects" />
    <title>
    Your Subject 
    </title>
  </Helmet>




     {isAdmin?<div className='mainMatrila row'>
<div className="col-md-4">
<h4 className='text-center text-primary fs-4 pointer border-bottom rounded py-3 shadow' onClick={()=>{
  showForm()
}}>
  supject one
</h4>


<form className='d-none matrilForm'>
<input className="form-control mb-2" type="text" placeholder="subject Id" aria-label="default input example"/>
<input className="form-control mb-2" type="text" placeholder="subject Name" aria-label="default input example"/>
<div class="mb-3">
  <label htmlFor="formFile" class="form-label">select file</label>
  <input className="form-control" type="file" id="formFile"/>
</div>

</form>




</div>
     </div>
     :
     <div className="row g-4">
      <div className="col-md-4">
     <Link href={'#/materials'}  underline="none" color="inherit">
     <div className={`${style.subject} pointer text-center `}>
        <span className={`${style.icon} position-absolute end-0 top-1 `}>
        <i class="fa-solid fa-bars"></i>
        </span>
        <p>
        subject
        </p>
      </div>
     </Link>
        </div>
      <div className="col-md-4">
     <Link href={'#/materials'}  underline="none" color="inherit">
     <div className={`${style.subject} pointer text-center `}>
        <span className={`${style.icon} position-absolute end-0 top-1 `}>
        <i class="fa-solid fa-bars"></i>
        </span>
        <p>
        subject
        </p>
      </div>
     </Link>
        </div>
      <div className="col-md-4">
     <Link href={'#/materials'}  underline="none" color="inherit">
     <div className={`${style.subject} pointer text-center `}>
        <span className={`${style.icon} position-absolute end-0 top-1 `}>
        <i class="fa-solid fa-bars"></i>
        </span>
        <p>
        subject
        </p>
      </div>
     </Link>
        </div>
      <div className="col-md-4">
     <Link href={'#/materials'}  underline="none" color="inherit">
     <div className={`${style.subject} pointer text-center `}>
        <span className={`${style.icon} position-absolute end-0 top-1 `}>
        <i class="fa-solid fa-bars"></i>
        </span>
        <p>
        subject
        </p>
      </div>
     </Link>
        </div>
      <div className="col-md-4">
     <Link href={'#/materials'}  underline="none" color="inherit">
     <div className={`${style.subject} pointer text-center `}>
        <span className={`${style.icon} position-absolute end-0 top-1 `}>
        <i class="fa-solid fa-bars"></i>
        </span>
        <p>
        subject
        </p>
      </div>
     </Link>
        </div>
      <div className="col-md-4">
     <Link href={'#/materials'}  underline="none" color="inherit">
     <div className={`${style.subject} pointer text-center `}>
        <span className={`${style.icon} position-absolute end-0 top-1 `}>
        <i class="fa-solid fa-bars"></i>
        </span>
        <p>
        subject
        </p>
      </div>
     </Link>
        </div>
      
      
     
        


        
      </div>} 
      

    </div>
  )
}
