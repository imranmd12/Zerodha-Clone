import React from "react";
import "./support.css";

export default function CreateTicket() {
  return (
    <div>
      <div className="container mb-5">
        <h2 className="text-muted text-center mt-5 p-5 ">
          To create a ticket, select a relevant topic
        </h2>
        <div className="row mb-5 mt-5">
          <div className="col-4 mt-5 ">
            <h4>
              <i className="fa-solid fa-circle-plus"></i> Account Opening
            </h4>
            <a
              href=""
              style={{
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              {" "}
              Getting started{" "}
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              {" "}
              Online
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              {" "}
              Offline
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              {" "}
              Charges
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              {" "}
              Company, Partnership and HUF
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              {" "}
              Non Resident Indian (NRI)
            </a>
          </div>
          <div className="col-4 mt-5">
            <h4>
              <i className="fa-solid fa-person"></i> Your Zerodha Account
            </h4>
            <a
              href=""
              style={{
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              {" "}
              Login credentials{" "}
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              {" "}
              Your Profile
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              {" "}
              Account modification and segment addition
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              {" "}
              CMR & DP ID
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              {" "}
              Nomination
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              {" "}
              Transfer and conversion of shares
            </a>
          </div>
          <div className="col-4 mt-5">
            <h4>
              <i className="fa-solid fa-person"></i> Trading and Markets
            </h4>
            <a
              href=""
              style={{
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              {" "}
              Trading FAQs{" "}
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              {" "}
              Kite
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              {" "}
              Margins
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              {" "}
              Product and order types
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              {" "}
              Corporate actions
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              {" "}
              Kite features
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
