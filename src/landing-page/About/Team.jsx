import React from "react";

export default function Team() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <h1 className="text-center text-muted mb-5 mt-5">People</h1>
        <div className="col-6 text-center mt-5">
          <img
            src="Media/images/nithin-kamath1.jpg"
            alt="nithin-kamath"
            style={{ width: "55%", borderRadius: "100%" }}
          />

          <h4 className="mt-5 mb-3">Nithin Kamath</h4>
          <p className="fs-5 text-muted">Founder, CEO</p>
        </div>
        <div className="col-6 mt-5 lh-lg fs-5 p-2">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="" className="text-decoration-none">
              Homepage{" "}
            </a>
            <a href="" className="text-decoration-none">
              {" "}
              / TradingQnA{" "}
            </a>
            <a href="" className="text-decoration-none">
              {" "}
              / Twitter{" "}
            </a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className=" col-4 text-center mt-5">
          <img
            src="https://zerodha.com/static/images/Nikhil.jpg"
            alt="Nikhil Kamath"
            style={{ width: "70%", borderRadius: "100%" }}
          />

          <h4 className="mt-5 mb-3">Nithin Kamath</h4>
          <p className="fs-5 text-muted">Co-founder & CFO</p>
        </div>

        <div className="col-4 text-center mt-5">
          <img
            src="https://zerodha.com/static/images/Kailash.jpg"
            alt="Dr. Kailash Nadh"
            style={{ width: "70%", borderRadius: "100%" }}
          />

          <h4 className="mt-5 mb-3">Dr. Kailash Nadh</h4>
          <p className="fs-5 text-muted">CTO</p>
        </div>
        <div className="col-4 text-center mt-5">
          <img
            src="https://zerodha.com/static/images/Venu.jpg"
            alt="Venu Madhav"
            style={{ width: "70%", borderRadius: "100%" }}
          />

          <h4 className="mt-5 mb-3">Venu Madhav </h4>
          <p className="fs-5 text-muted">COO</p>
        </div>
      </div>
    </div>
  );
}
