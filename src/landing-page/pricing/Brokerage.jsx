import React from "react";

export default function Brokerage() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5 text-center border-top">
          <div className="col-8 p-4 mb-2">
            <a href="" style={{ textDecoration: "none" }}>
              <h3
                className="fs-5 mb-4 "
                style={{ textAlign: "left", color: "#387ed1" }}
              >
                Brokerage calculator
              </h3>
            </a>
            <ul
              style={{ textAlign: "left", lineHeight: "2.5", fontSize: "15px" }}
              className="text-muted "
            >
              <li>
                Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                GST per order.
              </li>
              <li>Digital contract notes will be sent via e-mail.</li>
              <li>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
              <li>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </div>
        </div>

        <div className="container ">
          <h2
            style={{ fontSize: "1.7rem" }}
            className="text-center text-muted mb-5"
          >
            {" "}
            <a href="" style={{ textDecoration: "none" }}>
              <span style={{ fontSize: "1.7rem" }} className="">
                Calculate your costs upfront
              </span>
            </a>{" "}
            using our brokerage calculator
          </h2>
          <div className="row mt-5 text-muted mb-3 ">
            <h2 className="mt-5 mb-5 text-muted">Charges explained</h2>
            <div className="col-6">
              <div>
                <h5 style={{ fontSize: "1.4rem", fontWeight: "450" }}>
                  Securities/Commodities transaction tax
                </h5>
                <p style={{ fontSize: "1rem" }}>
                  Tax by the government when transacting on the exchanges.
                  Charged as above on both buy and sell sides when trading
                  equity delivery. Charged only on selling side when trading
                  intraday or on F&O.
                </p>
                <p style={{ fontSize: "1rem" }}>
                  When trading at Zerodha, STT/CTT can be a lot more than the
                  brokerage we charge. Important to keep a tab.
                </p>
              </div>
              <div>
                <h5 style={{ fontSize: "1.4rem", fontWeight: "450" }}>
                  Transaction/Turnover Charges
                </h5>
                <p style={{ fontSize: "1rem" }}>
                  Charged by exchanges (NSE, BSE, MCX) on the value of your
                  transactions.
                </p>
                <p style={{ fontSize: "1rem" }}>
                  BSE has revised transaction charges in XC, XD, XT, Z and ZP
                  groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD
                  groups have been merged into a new group X w.e.f 01.12.2017)
                </p>
                <p style={{ fontSize: "1rem" }}>
                  BSE has revised transaction charges in SS and ST groups to
                  ₹1,00,000 per crore of gross turnover
                </p>
                <p style={{ fontSize: "1rem" }}>
                  BSE has revised transaction charges for group A, B and other
                  non exclusive scrips (non-exclusive scrips from group E, F,
                  FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate
                  basis w.e.f. December 1, 2022.
                </p>
              </div>
            </div>
            <div className="col-6 mb-3 text-muted">
              <div>
                <h5 style={{ fontSize: "1.4rem", fontWeight: "450" }}>GST</h5>
                <p style={{ fontSize: "1rem" }}>
                  Tax levied by the government on the services rendered. 18% of
                  ( brokerage + SEBI charges + transaction charges)
                </p>
              </div>
              <div>
                <h5 style={{ fontSize: "1.4rem", fontWeight: "450" }}>
                  SEBI Charges
                </h5>
                <p style={{ fontSize: "1rem" }}>
                  Charged at ₹10 per crore + GST by Securities and Exchange
                  Board of India for regulating the markets.
                </p>
              </div>
              <div>
                <h5
                  className="mb-3"
                  style={{ fontSize: "1.4rem", fontWeight: "450" }}
                >
                  DP (Depository participant) charges
                </h5>
                <p style={{ fontSize: "1rem" }}>
                  ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34
                  GST) is charged on the trading account ledger when stocks are
                  sold, irrespective of quantity.
                </p>
                <p style={{ fontSize: "1rem" }}>
                  Female demat account holders (as first holder) will enjoy a
                  discount of ₹0.25 per transaction on the CDSL fee.
                </p>
                <p style={{ fontSize: "1rem" }}>
                  Debit transactions of mutual funds & bonds get an additional
                  discount of ₹0.25 on the CDSL fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
