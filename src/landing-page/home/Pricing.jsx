import React from "react";
import "./home.css";

export default function Pricing() {
  return (
    <div className="mb-5">
      <div className="container p-4 mt-2 gap-5 mb-5 ">
        <div className="row">
          <div className="col-5">
            <h1 className="mb-3">Unbeatable pricing</h1>
            <p className="text-size-3" style={{ fontSize: "1.3rem" }}>
              We pioneered the concept of discount broking and <br />
              price transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="" className="mx-4 text-decoration-none">
              See pricing <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-7 d-flex my-1 mb-5">
            <div className="d-flex price1">
              <img
                src="media/images/pricing-eq-zero.svg"
                alt=""
                style={{ width: "55%" }}
              />
              <p className="pricetext text-muted mx-3">
                Free account <br />
                opening
              </p>
            </div>
            <div className="d-flex price2">
              <img
                src="media/images/pricing-eq-zero.svg"
                alt=""
                style={{ width: "55%" }}
              />
              <p className="pricetext2 text-muted mx-3">
                Free equity delivery <br />
                and direct mutual funds
              </p>
            </div>
            <div className="d-flex price3">
              <img
                src="media/images/other-trades-zero3.svg"
                alt=""
                style={{ width: "55%" }}
              />
              <p className="pricetext3 text-muted mx-3">Intraday and F&O</p>
            </div>
            {/* <div className="d-flex price1">
              <img
                src="media/images/pricing-eq-zero2.svg"
                alt=""
                style={{ width: "55%" }}
              />
              <p className="pricetext text-muted  mx-3">
                Free equity delivery <br />
                and direct mutual funds
              </p>
            </div>
            <div className="d-flex price1">
              <img
                src="media/images/other-trades-zero3.svg"
                alt=""
                style={{ width: "55%" }}
              />
              <p className="pricetext text-muted  mx-3">Intraday and F&O</p>
            </div> */}
            {/* <div className="d-flex price1 mx-5">
              <img
                src="media/images/pricing-eq-zero2.svg"
                alt=""
                style={{ width: "90%" }}
              />
              <p className="pricetext text-muted">
                Free equity delivery <br />
                and direct mutual funds
              </p>
            </div>
            <div className="d-flex price1">
              <img
                src="media/images/other-trades-zero3.svg"
                alt=""
                style={{ width: "90%" }}
              />
              <p className="pricetext text-muted">Intraday and F&O</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
