import { useFormik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import { userContext } from "../Context/userContext.jsx";

export default function LogIn() {
 
  const {sendDataToSigin}=useContext(userContext)
  function submitRegister(values){
    console.log(values);
    // console.log("values");
  } 
  let validationSchema = Yup.object({
    
    email: Yup.string()
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
     
      email: "",
      password: "",
    
      
    },
    validationSchema,
    onSubmit:submitRegister
  });
  return (
    <>
      <div className="form container m-auto vh-100 d-flex align-items-center flex-column gap-3 ">
        <h2 className="text-center h1 text-primary border-bottom  border-3 rounded-bottom-3 w-50 border-primary my-3 p-3">
          Login Now{" "}
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className="row g-3 bg-primary p-5 rounded-4 text-white"
        >
          
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control mb-2"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="alert-danger bg-danger p-1 ps-3 rounded-2">
                {formik.errors.email}
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
              log in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
