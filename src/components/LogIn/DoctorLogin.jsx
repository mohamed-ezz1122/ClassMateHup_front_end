import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { userContext } from "../Context/userContext.jsx";
import { useNavigate} from 'react-router-dom'
import logo from '../../assets/Images/photo_2024-02-20_18-41-52.jpg'
import { Link } from '@mui/material'
import axios from "axios";

export default function DoctorLogin() {

  
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const navegate=useNavigate()
  const {signInMethod,setToken,token,user, setUser,setIsAdmin}=useContext(userContext)




  async function submitRegister(values){
    setIsLoading(true)
    // console.log(values);
    const data = await axios.post("http://localhost:8080/doctor/signin",values)
    .catch((error)=>{
        // console.log(error.response.data.doctor.status );
        setError(error.response.data.doctor.status)
    })
    // console.log(data);
    if(data.status===200){
      
      setError(null)
      setIsLoading(false)
      // console.log(data.data.doctor);
      localStorage.setItem("token",data.data.doctor.ID)
      setToken(data.data.doctor.ID)
      setUser(data.data.doctor.ID)
      setIsAdmin(data.data.doctor.isAdmin)
      navegate('/')
      // console.log("y");
    }
   
  }
  // useEffect(() => {
    
  //   if(token) navegate('/')
    
  //   }, [token])

  let validationSchema = Yup.object({
    
    mail: Yup.string()
      .email("enter valied email")
      .required("email can't be required"),
    password: Yup.string()
      .required("password can't be required")
      .min(6, "password must be 6 litter")
      .max(30, "password must be at mast 20 litter")
      
  });
  const formik = useFormik({
    initialValues: {
     
      mail: "",
      password: "",
    
      
    },
    validationSchema,
    onSubmit:submitRegister
  });
  return (
    <>
      <div className="form container m-auto vh-100 d-flex align-items-center flex-column gap-3 ">
      <img src={logo} className='w-50' alt="LOGO UNIVARSTY" />
        <h2 className="text-center h1 text-primary border-bottom  border-3 rounded-bottom-3 w-50 border-primary my-3 p-3">
         Hello Doctor Login Now{" "}
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className="row g-3 bg-primary p-5 rounded-4 text-white"
        >
          
          <div className="col-md-6">
            <label htmlFor="mail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control mb-2"
              id="mail"
              value={formik.values.mail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.mail && formik.touched.mail ? (
              <p className="alert-danger bg-danger p-1 ps-3 rounded-2">
                {formik.errors.mail}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control mb-2"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="alert-danger bg-danger p-1 ps-3 rounded-2">
                {formik.errors.password}
              </p>
            ) : (
              ""
            )}
          </div>
          {
            error?<p className="alert-danger text-danger">
                {error}
            </p>:""
          }

          
          
          

          <div className="col-12 ">
            <button  type="submit" className="btn btn-info btn-Sigin text-white">
            {isLoading ? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
        
      </div>
    </>
  );
}
