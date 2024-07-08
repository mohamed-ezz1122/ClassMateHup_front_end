import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { userContext } from "../Context/userContext.jsx";
import {useNavigate} from 'react-router-dom'
// import Link from '@mui/material/Link'
import logo from '../../assets/Images/photo_2024-02-20_18-41-52.jpg'
import axios from "axios";
export default function Register() {

  const option=[
    {lable:"first Year",value:1},
    {lable:"Seacand Year",value:2},
    {lable:"Theard Year",value:3},
    {lable:"forist Year",value:4},
  ]
  const [error, setError] = useState(null)
 
  const {getDataToRegister}=useContext(userContext)
  const navigate= useNavigate()
  
    async function submitRegister(values){
      console.log(values);
  
      const data  = await axios.post(
        "http://127.0.0.1:8080/student/signup",
        values
      ).catch((error)=>{
        console.log("account failed create try agin",error);
        setError("account failed create try agin")

      })
      console.log("data",data)
    // const data= await getDataToRegister(values)
    //  console.log(data);
     if(data.
      status ===200){
      console.log("ok✔");
      navigate('/login')
    }
    } 
  

  //==========get selected value =========>
    // const [selectValue, setSelectValue] = useState('')
    // function handelSelectValue(event){
    //   setSelectValue(event.ta)
      
    // }
    // console.log(selectValue);


  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let validationSchema = Yup.object({
    name: Yup.string()
      .required("name can't be required")
      .min(6, "name must be 6 litter")
      .max(20, "name must be at mast 20 litter"),
    mail: Yup.string()
      .email("enter valied email")
      .required("email can't be required"),
    password: Yup.string()
      .required("password can't be required")
      .min(8, "password must be 6 litter")
      .max(30, "password must be at mast 20 litter")
      .matches(/^[A-Z]/, "password must start uper case litter"),
      // rePassword: Yup.string()
      //       .oneOf([Yup.ref("password"), "repassword not matched password"])
      //       .required("rePassword is required"),
     phoneNumber:Yup.string().required("phone number is required").matches(phoneRegExp,"plese enter valied number"),
     age: Yup.number()
      .required("age can't be required")
      .min(18, "your age must be at lest 18 years")
      .max(80, "your age must be at mast 80 "),

       acadmicyear: Yup.number().required("academicYear can't be required"),

  });
  const formik = useFormik({
    initialValues: {
      
        mail: "",
        name: "",
        password: "",
        acadmicyear: "",
        age: "",
        phoneNumber: ""
      
    
      
    },
    validationSchema,
    onSubmit:submitRegister
  });
  return (
    <>
      <div className="form container m-auto vh-100 d-flex align-items-center flex-column gap-3 ">
      
      <img src={logo} alt="" />
        <h2 className="text-center h1 text-primary border-bottom  border-3 rounded-bottom-3 w-50 border-primary my-3 p-3">
        Register Now{" "}
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className="row g-3 bg-primary p-5 rounded-4 text-white"
        >
          <div className="col-md-6">
             <label htmlFor="name" className="form-label">
               Student Name
             </label>
             <input
               type="text"
               className="form-control mb-2"
               id="name"
               value={formik.values.name}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
             />
             {formik.errors.name && formik.touched.name ? (
               <p className="alert-danger bg-danger p-1 ps-3 rounded-2">
                 {formik.errors.name}
               </p>
             ) : (
               ""
             )}
           </div>
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
          {/* <div className="col-md-6">
              <label htmlFor="rePassword" className="form-label">
               rePasswored
             </label>
             <input
               type="password"
               className="form-control mb-2"
               id="rePassword"
               placeholder=""
               value={formik.values.rePassword}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
             />
             {formik.errors.rePassword && formik.touched.rePassword ? (
               <p className="alert-danger bg-danger p-1 ps-3 rounded-2">
                 {formik.errors.rePassword}
               </p>
             ) : (
               ""
             )}
           </div> */}
           <div className="col-md-6">
             <label htmlFor="phoneNumber" className="form-label">
               phone
             </label>
             <input
               type="text"
               className="form-control mb-2"
               id="phoneNumber"
               value={formik.values.phoneNumber}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
             />
             {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
               <p className="alert-danger bg-danger p-1 ps-3 rounded-2">
                 {formik.errors.phoneNumber}
               </p>
             ) : (
               ""
             )}
           </div>
           <div className="col-md-6">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              inputMode="numeric"
              className="form-control mb-2"
              id="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.age && formik.touched.age ? (
              <p className="alert-danger bg-danger p-1 ps-3 rounded-2">
                {formik.errors.age}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-12">
           <select  className="form-select" id="acadmicyear" onChange={formik.handleChange} value={formik.values.acadmicyear}>

            {
              option.map((opth,index)=>(
                <option  key={index} value={opth.value}>
                  {opth.lable}
                </option>
              ))
            }
          </select> 
        

          </div>
       {
        error?<p className="alert-danger text-danger">
          {error}
        </p>:""
       }
          
          

          <div className="col-12 ">
            <button disabled={!(formik.isValid&&formik.dirty)} type="submit" className="btn btn-info btn-Sigin text-white">
            Register
            </button>
            {/*  */}
          </div>
        </form>
      </div>
    </>
  );
}
