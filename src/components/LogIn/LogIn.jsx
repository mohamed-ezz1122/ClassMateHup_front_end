import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { userContext } from "../Context/userContext.jsx";
import { useNavigate} from 'react-router-dom'
import logo from '../../assets/Images/photo_2024-02-20_18-41-52.jpg'
import { Link } from '@mui/material'

export default function LogIn() {

  
  
  const [isLoading, setIsLoading] = useState(false)
  const navegate=useNavigate()
  const {signInMethod,setToken,token,user, setUser,setIsAdmin}=useContext(userContext)




  async function submitRegister(values){
    setIsLoading(true)
    console.log(values);
    // console.log("values");
    const data= await signInMethod(values)
    setIsLoading(false)
    console.log(data);

    if(data.student.status==='Correct password')
    {
      console.log("✔");
      localStorage.setItem("token",data.student.ID)
      setToken(data.student.ID)
      console.log(data.student);
      setUser(data.student)
      setIsAdmin(data.student.isAdmin)
      navegate('/')
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
      .min(8, "password must be 6 litter")
      .max(30, "password must be at mast 20 litter")
      .matches(/^[A-Z]/, "password must start uper case litter"),
   
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
          Login Now{" "}
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
        <span className="me-2">you have email ?<Link
          href="#/register"
          variant="body1"
          underline="hover"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          SignUp!
        </Link>
        </span> 
        <span><Link
          href="#/logInDr"
          variant="body1"
          underline="hover"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          Doctor!
        </Link>
        </span> 
      </div>
    </>
  );
}
