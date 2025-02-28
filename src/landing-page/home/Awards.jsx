import "react";
function Awards() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 p-5">
            <img
              src="media/images/largestBroker.svg"
              alt="largestBroker"
              style={{ marginLeft: "60px" }}
            />
          </div>
          <div className="col-6 p-5 mb-5">
            <h1 className="mb-7">Largest stock broker in India</h1>
            <p className="mb-4 mt-4 text-muted">
              2+ million Zerodha clients contribute to over 15% of all retail
              order volume in india daily by trading and investing
            </p>
            <div className="row text-muted">
              <div className="col-6 ">
                <ul>
                  <li className="m-2">Future and Option</li>
                  <li className="m-2">Commodity derivatives</li>
                  <li className="m-2">Currency derivatives</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li className="m-2">Stock & IPOs</li>
                  <li className="m-2">Direct mytual funds</li>
                  <li className="m-2">Bonds and Govt. Securities</li>
                </ul>
              </div>
            </div>
            <img
              className="m-2"
              src="Media\images\pressLogos.png"
              alt="Logo"
              style={{ width: "95%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
