import { useFormik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import { userContext } from "../Context/userContext.jsx";

export default function Register() {
 
  const {sendDataToSigin}=useContext(userContext)
  async function submitRegister(values){
    // console.log(values);
    
    sendDataToSigin(values)
  } 
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let validationSchema = Yup.object({
    name: Yup.string()
      .required("name can't be required")
      .min(6, "name must be 6 litter")
      .max(20, "name must be at mast 20 litter"),
    email: Yup.string()
      .email("enter valied email")
      .required("email can't be required"),
    password: Yup.string()
      .required("password can't be required")
      .min(8, "password must be 6 litter")
      .max(30, "password must be at mast 20 litter")
      .matches(/^[A-Z]/, "password must start uper case litter"),
      rePassword: Yup.string()
            .oneOf([Yup.ref("password"), "repassword not matched password"])
            .required("rePassword is required"),
     phoneNumbers:Yup.string().required("phone number is required").matches(phoneRegExp,"plese enter valied number"),
     age: Yup.number()
      .required("age can't be required")
      .min(18, "your age must be at lest 18 years")
      .max(80, "your age must be at mast 80 "),

      //  academicYear: Yup.string().required("academicYear can't be required"),

  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword:"",
      phoneNumbers:"",
      age:"",
      academicYear:"last year"
    
      
    },
    validationSchema,
    onSubmit:submitRegister
  });
  return (
    <>
      <div className="form container m-auto vh-100 d-flex align-items-center flex-column gap-3 ">
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
          <div className="col-md-6">
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
           </div>
           <div className="col-md-6">
             <label htmlFor="phoneNumbers" className="form-label">
               phone
             </label>
             <input
               type="number"
               className="form-control mb-2"
               id="phoneNumbers"
               value={formik.values.phoneNumbers}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
             />
             {formik.errors.phoneNumbers && formik.touched.phoneNumbers ? (
               <p className="alert-danger bg-danger p-1 ps-3 rounded-2">
                 {formik.errors.phoneNumbers}
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
              type="text"
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
          {/* <div className="col-md-6">
          <select className="form-select" aria-label=".form-select-lg example"
          value={formik.values.academicYear}>
            onChange={formik.handleChange}
          <option selected> Select Your Acadimic Year </option>
          <option value='first Year'>first Year</option>
          <option value="Second Year">Second Year</option>
          <option value="Third Year">Third Year</option>
          <option value="last Year">last Year</option>
          //'first Year','Second Year','Third Year','last Year'
          {formik.errors.academicYear && formik.touched.academicYear ? (
                      <p className="alert-danger bg-danger p-1 ps-3 rounded-2">
                        {formik.errors.academicYear}
                      </p>
                    ) : (
                      ""
                    )}
        </select>
          </div> */}
       
          
          
          

          <div className="col-12 ">
            <button disabled={!(formik.isValid&&formik.dirty)} type="submit" className="btn btn-info btn-Sigin text-white">
            Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
