import React from "react";
import   "./Loading.css";

export default function Loading() {
  return (
    <>
      <div className="d-flex  flex-column justify-content-center align-items-center">
        <p className="h1 text-primary">
        waiting
        </p>
        <div className="lds-facebook ">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
