import React, { useContext } from "react";
import "./AddPost.css";
import { navContext } from "../Context/NavContext";


export default function AddPost() {

  let {hideModel}=useContext(navContext)
  // 
  return (
    <>
      <div className="add-post bg-primary  d-none flex-column fixed-top w-100 align-items-center justify-content-center vh-100">
      <i className="fa-solid fa-xmark position-absolute  fs-3 text-white pointer" onClick={()=>{
        hideModel()
      }}></i>
        <h4 className=" h2 text-white"> Add Task ❤</h4>
        <div className="addPost-inner py-5 ">
          <input
            className="form-control form-control-lg mb-3 "
            type="text"
            placeholder="Title"
            aria-label=".form-control-lg example"
          />
          <select className="form-select mb-3" aria-label="Default select example">
            <option >Acadimic Years</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <input
            className="form-control form-control-lg mb-3 "
            type="text"
            placeholder="Subject Name"
            aria-label=".form-control-lg example"
          />
          <textarea
            className="form-control mb-3 "
            aria-label="What You Need to say "
          ></textarea>
          <form action="">
            <div className="input-group mb-3 ">
              <label className="input-group-text" htmlFor="inputGroupFile01">
                Upload
              </label>
              <input
                type="file"
                className="form-control"
                id="inputGroupFile01"
              />
            </div>
            <button type="submit" className="btn bg-white text-primary" onClick={hideModel}>  Add Post</button>
          </form>
        </div>
      </div>
    </>
  );
}
