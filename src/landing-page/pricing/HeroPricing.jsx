import React from "react";

export default function HeroPricing() {
  return (
    <>
      <div className="text-center mt-5 mb-5  ">
        <h1 className=" " style={{ fontSize: "4em", color: "#525151" }}>
          Charges
        </h1>
        <p className="text-muted mb-5" style={{ fontSize: "2em" }}>
          List of all charges and taxes
        </p>
      </div>
      <div className="container text-center mt-5 p-5">
        <div className="row">
          <div className="col-4 mb-3 p-3 mf-2 ">
            <div className="">
              <img
                src="media/images/pricing-eq-zero.svg"
                alt=""
                style={{ width: "80%" }}
              />
              <h1 className="mb-4 fs-1 text-muted">Free equity delivery</h1>
              <p className="text-muted p-2" style={{ fontSize: "1.3em" }}>
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </p>
            </div>
          </div>
          <div className="col-4 mb-3 p-3">
            <div className="">
              <img
                src="Media\images\other-trades-zero3.svg"
                alt=""
                style={{ width: "80%" }}
              />
              <h1 className="mb-4 text-muted ">Free equity delivery</h1>
              <p className="text-muted p-2" style={{ fontSize: "1.3em" }}>
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
                Flat ₹20 on all option trades.
              </p>
            </div>
          </div>
          <div className="col-4 mb-3 p-3  ">
            <div className="">
              <img
                src="media/images/pricing-eq-zero.svg"
                alt=""
                style={{ width: "80%" }}
              />
              <h1 className="mb-4 fs-1 text-muted ">Free equity delivery</h1>
              <p className="text-muted p-2" style={{ fontSize: "1.3em" }}>
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
