import React from 'react'
import './Notifcation.css'
import imag from"../../assets/Images/WhatsApp Image 2023-10-14 at 18.12.17_3e4f8434.jpg"

export default function Notifcation() {
  return <>
  <div className="row p-2 ">
    <div className="inner-notifcation bg-primary position-fixed rounded-bottom z-1 text-white col-lg-3  col-md-4 d-none gap-3 align-items-center justify-content-center  p-3">
        
            <div className="Noti-imag">
            <img src={imag} alt="" className=' w-100  shadow  rounded'/>
            </div>

            <p className='fs-4 fw-bold'>D.ehab add bost</p>
            
            
                    </div>



    


  </div>

  
  
  
  </>
}
