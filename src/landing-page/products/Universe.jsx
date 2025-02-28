import React from "react";
import "./product.css";

export default function Universe() {
  return (
    <>
      <h4 className="mt-5 mb-5 text-center">
        Want to know more about our technology stack? Check out the{" "}
        <a href="">Zerodha.tech</a> blog.
      </h4>
      <div className="container text-center mt-5">
        <div className="row text-center ">
          <div className="col-4 p-5">
            <img src="Media/images/zerodhaFundhouse1.png" alt="" />
            <p className="text-muted mt-4">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-5 mt-3">
            <img src="Media/images/sensibull-logo.svg" alt="" />
            <p className="text-muted mt-4">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="Media/images/tijori.svg" alt="" />
            <p className="text-muted mt-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 p-5 ">
            <img src="Media\images\streakLogo.png" alt="" />
            <p className="text-muted mt-4">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-5 mt-3">
            <img src="Media\images\smallcaseLogo.png" alt="" />
            <p className="text-muted mt-4">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="Media\images\dittoLogo.png" alt="" />
            <p className="text-muted mt-4">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <button
          className="p-3 btn btn-primary mt-4  mb-5"
          style={{ width: "20%", margin: "0 auto", fontSize: "20px" }}
        >
          Sign up for free
        </button>
      </div>
    </>
  );
}
