import React from "react";

export default function Hero() {
  return (
    <div className="container mb-5 border-bottom">
      <div className="text-center mt-5 mb-5 lh-base p-5">
        <h1 style={{ fontSize: "4rem" }} className="mt-2 mb-4 text-muted ">
          Zerodha Products
        </h1>
        <h5 className="mt-2 mb-4 text-muted " style={{ fontSize: "2rem" }}>
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p style={{ fontSize: "1.3rem" }}>
          Check out our{" "}
          <a
            href=""
            className=" text-center text-decoration-none mb-5 "
            style={{ clor: "" }}
          >
            investment offerings{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}
