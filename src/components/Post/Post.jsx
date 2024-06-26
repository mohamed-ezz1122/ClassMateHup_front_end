import React, { useContext } from 'react'
import userImage from "../../assets/Images/WhatsApp Image 2023-10-14 at 18.12.17_3e4f8434.jpg"
import './Post.css'
import Comment from '../Comment/Comment'
import { userContext } from '../Context/userContext.jsx'


export default function Post() {
    const {showComment}= useContext(userContext)
  return <div className="posts col-md-10">
 
  <div className="post py-3 rounded-2 shadow w-100 mb-5 p-3 ">
  <div className="headPost w-100 d-flex align-items-center   w-25 justify-content-start  m-3 pt-3 ">
  <div className="image shadow overflow-hidden me-3">
 <img src={userImage} alt="User Profile"className="w-100" />
    </div>      
    <h3 className='fs-5'>Mohamed ezz</h3>


  </div>
  <div className="postBody">
      <p className="text-center p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui pariatur rem suscipit, maxime, tempore ipsa assumenda corporis voluptate nostrum dolorum, dignissimos cupiditate. Vero soluta consectetur, animi non aliquid ipsum.
      </p>
<div className="reacts d-flex justify-content-between align-items-center">
<div className="left ">
    <span className=' me-2'>nuber of comment</span>
    <span>number of save</span>
    </div>

<span>3</span>

    
</div>
  </div>
  <div className="postFooter border-top border-bottom  d-flex align-items-center justify-content-around overflow-hidden p-4 mb-4 ">
  <div className="downLowd overflow-hidden   text-center">
  <i className="fa-regular fa-bookmark"></i>
  </div>
  <div className="comment overflow-hidden ms-4  text-center">
  <i className="fa-regular fa-comment w-100 fs-5 like" onClick={()=>{showComment()}}></i>
  </div>
  <div className="likeIcon overflow-hidden ms-4 text-center">
  <i className="fa-regular fa-thumbs-up w-100 fs-5 like"></i>
  </div>
      
  </div>


  <Comment/>
  </div>
  </div>
}
