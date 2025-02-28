import React from "react";

export default function OpenAccount() {
  return (
    <div className="container p-5 mb-5 ">
      <div className="row text-center">
        <h1 className=" mb-2 text-muted">Open a Zerodha account</h1>
        <p className="mt-4 text-muted mb-4 " style={{ fontSize: "1.5em" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary mt-3  mb-5 "
          style={{ width: "20%", margin: "0 auto", fontSize: "1.5em" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}
