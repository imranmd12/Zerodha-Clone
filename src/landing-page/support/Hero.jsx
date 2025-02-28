import React from "react";
import "./support.css";
export default function Hero() {
  return (
    <>
      <section className="container-fluid mb-5" id="support-hero">
        <div className=" support mb-2" id="support-title">
          <h5 className="mt-5 ">Support Portal</h5>
          <a
            href=""
            className="mt-5"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Track Ticket
          </a>
        </div>

        <div className="row support1">
          <div
            className="col-6 p-4 support-text "
            style={{
              fontSize: "1.3rem",
              fontWeight: "400",
            }}
          >
            <p className="text-center mx-5 ">
              Search for an answer or browse help topics to create a ticket
            </p>
            <input
              type="text"
              placeholder="Eg- how do i activate.. why is my order getting rejected.."
              className="input"
            />
            <br />
            <a id="link" className="border-bottom" href="">
              Track account opening
            </a>
            <a id="link" className="border-bottom mx-3" href="">
              Track segment activation{" "}
            </a>
            <a id="link" className="border-bottom mx-3" href="">
              Intraday margins{" "}
            </a>
            <br />
            <a id="link" className="border-bottom" href="">
              Kite user manual
            </a>
          </div>

          {/*  */}
          <div className="col-6 p-5">
            <h1 className="fs-3">Featured</h1>
            <ol>
              <li>
                <a id="link1" className="border-bottom" href="">
                  Offer for sale (OFS) - February 2025
                </a>
              </li>
              <li>
                <a id="link1" className="border-bottom" href="">
                  Latest Intraday leverages and Square-off timings{" "}
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
