import React from "react";
import "./signup.css";
export default function StepAcc() {
  return (
    <>
      <div className="container stepAcc  ">
        <h1 className=" text-center text-muted">
          Steps to open a demat account with Zerodha
        </h1>
        <div className="row  step2">
          <div className="col-6 mt-3">
            <img
              src="Media/images/steps-acop.svg"
              alt="steps-acop"
              style={{ width: "80%" }}
              className="text-center"
            />
          </div>
          <div className="col-6 mt-5 mb-5 text-muted  ">
            <span className="steps p-1" style={{ width: "50px" }}>
              01
            </span>
            <h4
              className="p-3 border-bottom"
              style={{ display: "inline-block" }}
            >
              Enter the requested details
            </h4>
            <div className="mt-3 text-muted">
              <span className="steps p-1" style={{ width: "50px" }}>
                02
              </span>
              <h4
                className="p-3 border-bottom"
                style={{ display: "inline-block" }}
              >
                Complete e-sign & verification
              </h4>
            </div>
            <div className="mt-3 text-muted">
              <span className="steps p-1" style={{ width: "50px" }}>
                03
              </span>
              <h4
                className="p-3 border-bottom "
                style={{ display: "inline-block" }}
              >
                Start investing!
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src="" alt="" />
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </>
  );
}
