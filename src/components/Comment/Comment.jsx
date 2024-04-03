

import React, { useContext } from 'react'
import userImage from "../../assets/Images/WhatsApp Image 2023-10-14 at 18.12.17_3e4f8434.jpg"
import './Comment.css'
// import { userContext } from '../Context/userContext'
export default function Comment() {
  
  return <>
  
  <div className="comment d-flex  w-100 ">
    <div className="comment-image shadow overflow-hidden me-3">
        <img src={userImage} alt="" className='rounded-circle ' />
        
    </div>
    <input name="comment" id="comment" type='text'  className='form-control ' placeholder='Add Comment'></input>


  </div>
  
  
  
  
  </>
}
