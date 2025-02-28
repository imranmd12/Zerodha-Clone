import React from "react";

export default function Education() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <img
              src="media/images/education.svg"
              alt=""
              style={{ width: "50%%" }}
            />
          </div>
          <div className="col-6 mb-5">
            <h1 className="fs-1 fst-normal">Free and open market education</h1>
            <p className="mt-5 text-muted fs-4">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="" className="text-decoration-none mb-5">
              Varsity <i className="fa-solid fa-arrow-right"></i>
            </a>

            <p className="mt-5 text-muted fs-4">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="" className="text-decoration-none ">
              TradingQ&A <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
