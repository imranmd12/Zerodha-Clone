import React from "react";

export default function RightSection({
  // eslint-disable-next-line react/prop-types
  imageURL,
  // eslint-disable-next-line react/prop-types
  productName,
  // eslint-disable-next-line react/prop-types
  productDescription,
  // eslint-disable-next-line react/prop-types
  learnMore,
  // eslint-disable-next-line react/prop-types
  urlName,
}) {
  return (
    <>
      <div className="container text center">
        <div className="row mt-5">
          <div className="col-5 p-5 mt-5">
            <h1>{productName}</h1>
            <p className="fs-4 text-muted">{productDescription}</p>
            <div className="mb-4 ">
              <a href={urlName} style={{ fontSize: "1.3rem " }}>
                {" "}
                {urlName}{" "}
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>

            <div></div>
          </div>
          <div className="col-5 p-5 mt-4 mb-5">
            <img src={imageURL} alt="" style={{ width: "120%" }} />
          </div>
        </div>
      </div>
    </>
  );
}
