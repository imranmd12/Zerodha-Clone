import React from "react";

export default function LeftSection({
  imageURL,

  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appstore,
  Coin,
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-5 p-5 mt-4">
          <img src={imageURL} alt="" style={{ width: "120%" }} />
        </div>
        <div className="col-2 mt-5"></div>
        <div className="col-5 p-5 mt-5" style={{ lineHeight: "1.8" }}>
          <h1>{productName}</h1>
          <p className="fs-4 text-muted">{productDescription}</p>
          <div className="mb-4 ">
            <a href={tryDemo}>
              Try Demo{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "40px", fontSize: "1.3rem " }}
            >
              {" "}
              Learn Demo{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div>
            <a href={googlePlay}>
              <img
                src="Media/images/googlePlayBadge.svg"
                alt=""
                style={{ width: "30%" }}
              />
            </a>
            <a href={appstore} style={{ marginLeft: "50px" }}>
              <img
                src="Media/images/appstoreBadge.svg"
                alt=""
                style={{ width: "30%" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
