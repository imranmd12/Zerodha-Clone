import React from "react";
import "./signup.css";
export default function DematAcc() {
  return (
    <>
      <h1 className="text-center text-muted  dematHead">
        Investment options with Zerodha demat account
      </h1>

      <div className="container my-4 mb-5">
        <div className="row stocks-acop mx-5 ">
          <div className="col-6 d-flex">
            <img
              src="Media/images/stocks-acop.svg"
              alt="stocks-acop"
              style={{ width: "20%" }}
            />
            <div className="mx-5 text-muted">
              <h2 style={{ fontSize: "2.5em" }}>Mutual funds</h2>
              <p style={{ fontSize: "1.3em" }}>
                Invest in commission-free direct mutual funds
              </p>
            </div>
          </div>

          <div className="col-6 my-5 d-flex">
            <img
              src="Media/images/mf-acop.svg"
              alt="stocks-acop"
              style={{ width: "20%" }}
            />
            <div className="mx-5 text-muted">
              <h2 style={{ fontSize: "2.5em" }}>Stocks</h2>
              <p style={{ fontSize: "1.3em" }}>
                Invest in all exchange-listed securities
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container  my-4">
        <div className="row stocks-acop mx-5 ">
          <div className="col-6 d-flex">
            <img
              src="Media/images/ipo-acop.svg"
              alt="stocks-acop"
              style={{ width: "20%" }}
            />
            <div className="mx-5 text-muted">
              <h2 style={{ fontSize: "2.5em" }}>IPO</h2>
              <p style={{ fontSize: "1.3em" }}>
                Apply to the latest IPOs instantly via UPI
              </p>
            </div>
          </div>

          <div className="col-6 my-5 d-flex">
            <img
              src="Media/images/fo-acop.svg"
              alt="stocks-acop"
              style={{ width: "20%" }}
            />
            <div className="mx-5 text-muted">
              <h2 style={{ fontSize: "2.5em" }}>Futures & options</h2>
              <p style={{ fontSize: "1.3em" }}>
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button
          className="p-2 btn btn-primary  signbtn1 mb-5"
          style={{ width: "20%", margin: "0 auto", fontSize: "1.5em" }}
        >
          Explore Invenstment
        </button>
      </div>
    </>
  );
}
