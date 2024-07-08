import { Helmet } from "react-helmet";
import Loading from "../Loading/Loading";
import { userContext } from "../Context/userContext";
import { useContext, useState } from "react";
import * as Yup from "yup";

import Style from "./Subjects.module.css";
import Swal from "sweetalert2";
import { SupContext } from "../Context/SupContext";
import { useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { MainContext } from "../Context/MainContext";

export default function Subjects() {
  //isAdmin ----->

  const { token, isAdmin } = useContext(userContext);
  
  const { getDataFromDc } = useContext(SupContext);
  const [year, setYear] = useState([]);
  const [subject, setSubject] = useState([]);
  // const [subjects, setSubjects] = useState([]);
  const [update, setUpadate] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  //=========getdata of subject =====>

  async function submitRegister(values) {
    // console.log("true", values);
    setIsLoading(true)
    const data = await axios.post("http://localhost:8080/doctor/addsubject",values)
    .catch((error)=>{
      // console.log("failed",error.response.data);
      setError(error.response.data)

      setUpadate(null)
    })
    // console.log(data.status);
    if(data.status==201){

      setUpadate("subject added succefly")
      setIsLoading(false)
      setError(null)
      // console.log(update);
    }
  }

  let validationSchema = Yup.object({
    
    doctorMail: Yup.string()
      .email("enter valied email")
      .required("email can't be required"),
   subjectName: Yup.string()
      .required("subject Name can't be required")
      .min(6, "subject Name must be 6 litter")
      .max(30, "subject Name must be at mast 20 litter")
      ,
      academicYear :Yup.number().required("academic Year can't be required")
      
  });

  const formik = useFormik({
    initialValues: {
      doctorMail: "",
      academicYear: "",
      subjectName: "",
    },validationSchema,
    onSubmit: submitRegister,
  });

  // function getSupject() {
  //   const subjects = getDataFromDc();
  //   setSubjects(subjects);
  // }
  // useEffect(() => {
  //   // getSupject()
  // });

  // function handelchange(event) {
  //   const { value, checked } = event.target;

  //   if (checked) {
  //     setSubject((pre) => [...pre, value]);
  //   } else {
  //     setSubject((pre) => {
  //       return [...pre.filter((sub) => sub !== value)];
  //     });
  //   }
  // }
  // console.log(subject);
  //===========display your subject ===========>
  // function displaySubject() {
  //   Swal.fire({
  //     position: "center",
  //     icon: "success",
  //     title: "Your subject saved",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  // }
  // console.log(subject);
  // const changeSubjectOfYears = (value) => {
  //   // console.log(value);
  //   if (value == "firistYear") {
  //     setYear(firstYear);
  //   } else if (value == "secoundYear") {
  //     setYear(secoundYear);
  //   } else if (value == "is") {
  //     setYear(is);
  //   } else if (value == "ds") {
  //     setYear(ds);
  //   } else if (value == "cs") {
  //     setYear(cs);
  //   } else if (value == "it") {
  //     setYear(it);
  //   } else {
  //     setYear([]);
  //   }
  // };

  // ///==========set year====>

  // console.log(listContiner);

  const firstYear = ["1", "2", "3", "4", "5", "6"];
  const secoundYear = ["7", "8", "9", "10", "11", "12"];
  const thiredYear = ["13", "14", "15", "16", "17", "18"];
  const fouristYear = ["19", "20", "21", "22", "23", "24"];
  const is = ["is1", "is2", "is3", "is4"];
  const it = ["it1", "it2", "it3", "it4"];
  const ds = ["ds1", "ds2", "ds3", "ds4"];
  const cs = ["ics", "cs2", "cs3", "cs4"];

  ///=========function to save selected subjects=====>

  return (
    <div className="container">
      <Helmet>
        <meta name="description" content="Add your subjects" />
        <title>Subjects</title>
      </Helmet>

      {/* <Loading/> */}
      {isAdmin ? (
        <div>
          <div className="row m-0 mb-5  text-light    ">
            <div className=" col-xl-6  col-md-6 mb-3 mb-xl-0">
              <div className="inner">
                {/* <ul className={` ${Style.supList} list-unstyled bg-primary rounded-1 shadow p-5 `}>
            <li
              className=" rounded pe-4 ps-4"
              value={"firistYear"}
              onClick={(e) => {
                // console.log(e.target.getAttribute("value"));
                changeSubjectOfYears(e.target.getAttribute("value"));
              }}
            >
              firist Year
            </li>
            <li
              className=" rounded pe-4 ps-4"
              value={"secoundYear"}
              onClick={(e) => {
                // console.log(e.target.getAttribute("value"));
                changeSubjectOfYears(e.target.getAttribute("value"));
              }}
            >
              Sec Year
            </li>
            <li
              className={`${Style.thBtn} rounded pe-4 ps-4`}
              value={"thiredYear"}
              onClick={(e) => {
                // console.log(e.target.getAttribute("value"));
                changeSubjectOfYears(e.target.getAttribute("value"));
              }}
            >
              Th Year
              <ul className={`${Style.sectionList} list-unstyled rounded text-center`}>
                <li value={"it"} onClick={(e) => {
                // console.log(e.target.getAttribute("value"));
                changeSubjectOfYears(e.target.getAttribute("value"));
              }}>
                  IT
                </li>
                <li value={"cs"}  onClick={(e) => {
                // console.log(e.target.getAttribute("value"));
                changeSubjectOfYears(e.target.getAttribute("value"));
              }}>
                  CS
                </li>
                <li value={"is"}  onClick={(e) => {
                // console.log(e.target.getAttribute("value"));
                changeSubjectOfYears(e.target.getAttribute("value"));
              }}>
                  IS
                </li>
                <li value={"ds"}  onClick={(e) => {
                // console.log(e.target.getAttribute("value"));
                changeSubjectOfYears(e.target.getAttribute("value"));
              }}>
                  DS
                </li>
              </ul>
            </li>
            <li
              className={`${Style.thBtn} rounded pe-4 ps-4`}
              value={"fouristYear"}
              onClick={(e) => {
                // console.log(e.target.getAttribute("value"));
                changeSubjectOfYears(e.target.getAttribute("value"));
              }}
            >
              forist Year
              <ul className={`${Style.sectionList} list-unstyled rounded text-center`}>
                <li value={"it"} onClick={(e) => {
                // console.log(e.target.getAttribute("value"));
                changeSubjectOfYears(e.target.getAttribute("value"));
              }}>
                  IT
                </li>
                <li value={"cs"}  onClick={(e) => {
                // console.log(e.target.getAttribute("value"));
                changeSubjectOfYears(e.target.getAttribute("value"));
              }}>
                  CS
                </li>
                <li value={"is"}  onClick={(e) => {
                // console.log(e.target.getAttribute("value"));
                changeSubjectOfYears(e.target.getAttribute("value"));
              }}>
                  IS
                </li>
                <li value={"ds"}  onClick={(e) => {
                // console.log(e.target.getAttribute("value"));
                changeSubjectOfYears(e.target.getAttribute("value"));
              }}>
                  DS
                </li>
              </ul>
            </li>
          </ul> */}

                <form
                  onClick={formik.handleSubmit}
                  className="row g-3 bg-primary p-5 rounded-4 text-white "
                >
                  <div className="col-md-6 w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="doctor email"
                      id="doctorMail"
                      value={formik.values.doctorMail}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.doctorMail && formik.touched.doctorMail ? (
              <p className="alert-danger bg-danger p-1 ps-3 rounded-2">
                {formik.errors.doctorMail}
              </p>
            ) : (
              ""
            )}
                  </div>
                  <div className="col-md-6 w-100">
                    <input
                      type="number"
                      max={4}
                      min={1}
                      id="academicYear"
                      className="form-control"
                      placeholder="academicYear"
                      value={formik.values.academicYear}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.academicYear && formik.touched.academicYear ? (
              <p className="alert-danger bg-danger p-1 ps-3 rounded-2">
                {formik.errors.academicYear}
              </p>
            ) : (
              ""
            )}
                  </div>
                  <div className="col-md-6 w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="subject Name"
                      id="subjectName"
                      value={formik.values.subjectName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.subjectName && formik.touched.subjectName ? (
              <p className="alert-danger bg-danger p-1 ps-3 rounded-2">
                {formik.errors.subjectName}
              </p>
            ) : (
              ""
            )}
                  </div>
                  <p>
                    {
                      update?update:""
                    }
                  </p>
                  
                  <p>
                    {
                      error?"subject added fail":""
                    }
                  </p>

                  <button  type="submit" className="btn btn-info btn-Sigin text-white">
            {isLoading ? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                "save"
              )}
            </button>
                </form>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 ps-5  m-0 text-light d-flex flex-column ">
              <div className="inner  rounded-2 px-2  border-2 shadow">
                <h2 className="py-3 bg-primary w-100 text-center rounded-bottom-1">
                  {" "}
                  subjects{" "}
                </h2>

                {firstYear.length ? (
                  <ul className={`supList text-dark  list-unstyled p-3`}>
                    {firstYear.map((sup, index) => (
                      <li key={index} className={`${Style.subHome}`}>
                        <div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={sup}
                              id="supOne"
                              onChange={(e) => {
                                handelchange(e);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="supOne"
                            >
                              {sup}
                            </label>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Loading />
                )}
              </div>
            </div>

            {/* <div className=" d-flex flex-column gap-3 shadow rounded bg-primary text-light col-xl-4">
            <h3 className="text-center py-3 border-bottom border-2">
              Your Subject
            </h3>
            <div className="subCollection px-3 pb-3 d-flex flex-column ">
             {subject?.map((sub,index)=>(
              <div key={index} className="mb-3 d-flex justify-content-between align-items-center">
            <div>
            <span className="me-3">
              {index+1 }-
              </span>
                <span className=" mb-2 ">
              {sub}
            </span>
            </div>
            <span className="text-end  pointer">
            <i class="fa-regular fa-face-smile"></i>
            </span>
            
              </div>
             ))
             
             } 
             <button className="btn btn-light text-primary" onClick={()=>{
              displaySubject()
             }}>Save</button>
            </div>

          </div> */}
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-xl-8 col-md-6 ps-5  m-0 text-light d-flex flex-column ">
            <div className="inner  rounded-2 px-2  border-2 shadow">
              <h2 className="py-3 bg-primary w-100 text-center rounded-bottom-1">
                {" "}
                subjects{" "}
              </h2>

              {firstYear.length ? (
                <ul className={`supList text-dark  list-unstyled p-3`}>
                  {firstYear.map((sup, index) => (
                    <li key={index} className={`${Style.subHome}`}>
                      <div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={sup}
                            id="supOne"
                            onChange={(e) => {
                              handelchange(e);
                            }}
                          />
                          <label className="form-check-label" htmlFor="supOne">
                            {sup}
                          </label>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <Loading />
              )}
            </div>
          </div>

          <div className=" d-flex flex-column gap-3 shadow rounded bg-primary text-light col-xl-4">
            <h3 className="text-center py-3 border-bottom border-2">
              Your Subject
            </h3>
            <div className="subCollection px-3 pb-3 d-flex flex-column ">
              {subject?.map((sub, index) => (
                <div
                  key={index}
                  className="mb-3 d-flex justify-content-between align-items-center"
                >
                  <div>
                    <span className="me-3">{index + 1}-</span>
                    <span className=" mb-2 ">{sub}</span>
                  </div>
                  <span className="text-end  pointer">
                    <i class="fa-regular fa-face-smile"></i>
                  </span>
                </div>
              ))}
              <button
                className="btn btn-light text-primary"
                onClick={() => {
                  displaySubject();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/*=============== subject Selected================= */}
    </div>
  );
}
