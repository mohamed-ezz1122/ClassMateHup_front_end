import React from "react";

import "./Subjects.css";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Content from "../Content/Content";
export default function Subjects() {
  return (
    <>
    <div className="d-flex">
    <Sidebar/>
    <Content/>
    </div>
    
      
    </>
  );
}
