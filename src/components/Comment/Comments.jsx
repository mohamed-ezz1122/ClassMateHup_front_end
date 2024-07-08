import React, { useContext, useState } from "react";

import "./Comment.css";
import { Send } from "@mui/icons-material";
import { IconButton } from "@mui/material";
// import { userContext } from '../Context/userContext'
export default function Comments() {
  const [comments, setComments] = useState([])
 const commentsArr=[]
 function displayComment(){
  
  let commentContent=document.getElementById("commentFailed").value
  commentsArr.push(commentContent)
  console.log(commentsArr);
  setComments(commentsArr)
  
  document.getElementById("commentFailed").value  = ""
 }
 
  
  return (
    <>
      <div className="container mb-5">
        <div className="row height d-flex justify-content-center align-items-center ">
          <div className="col-md-12">
            <div className="card">
              <div className="p-3">
                <h6>Comments</h6>
              </div>
              <div className="mt-3 d-flex flex-row align-items-center p-3 form-color pointer">
                {" "}
                <img
                  src="https://i.imgur.com/zQZSWrt.jpg"
                  width="50 "
                  className="rounded-circle mr-2"
                />{" "}
                <textarea
                  type="text"
                  className="form-control commentFailed"
                  placeholder="Enter your comment..."
                  id="commentFailed"
                ></textarea>{" "}
                <IconButton onClick={displayComment} className="text-primary" aria-label="add to favorites" disabled={false}>
          <Send />
        </IconButton>
              </div>
              <div className="mt-2">

              {
             comments.length !=0 ?comments.map((comment,index)=>(
                 
                <div className="d-flex flex-row p-3" key={index}>
                  {" "}
                  <img
                    src="https://i.imgur.com/zQZSWrt.jpg"
                    width="40"
                    height="40"
                    className="rounded-circle mr-3"
                  />
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex flex-row align-items-center">
                        {" "}
                        <span className="mr-2">Brian selter</span>{" "}
                        <small className="c-badge">Top Comment</small>{" "}
                      </div>{" "}
                      <small>12h ago</small>
                    </div>
                    <p className="text-justify comment-text mb-0">
                     {comment}
                    </p>
                    <div className="d-flex flex-row user-feed">
                      {" "}
                      <span className="wish">
                        <i className="fa fa-heartbeat mr-2"></i>24
                      </span>{" "}
                      <span className="ml-3">
                        <i className="fa fa-comments-o mr-2"></i>Reply
                      </span>{" "}
                    </div>
                  </div>
                </div>
                
              
             )):""
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
