import "react";
import "./signup.css";
export default function SignupCom() {
  return (
    <>
      <div className="container">
        <div className="text-muted text-center heading mb-5">
          <h1 style={{ fontSize: "3.5rem" }}>
            Open a free demat and trading account online
          </h1>
          <p style={{ fontSize: "1.5rem" }} className="text-center mt-4 mb-5">
            Start investing brokerage free and join a community of 1.5+ crore
            investors and traders
          </p>
        </div>
        <div className="row">
          <div className="col-6 mt-5  ">
            <img
              src="Media\images\account_open.svg"
              alt="account_open"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-6 mt-5 ">
            <h1 className="mt-4 mb-3 text-muted">Signup now</h1>
            <p
              className="mt-3 mb-3 text-muted"
              style={{ fontSize: "1.4em", fontWeight: "400" }}
            >
              Or track your existing application
            </p>
            <div className="form d-flex">
              <span className="mobilenumd">+91</span>
              <input
                type="number"
                placeholder="Enter your Phone Number"
                className="mobilenum"
                min="100000000"
                max="999999999"
                name="mobile"
                required
              />
            </div>
            <p className="text-muted mt-2">
              You will receive an OTP on your number
            </p>
            <button
              type="button"
              className="btn btn-primary mt-4 mb-3 signbtn"
              style={{ fontSize: "1.5em" }}
            >
              Continue
            </button>
            <br />
            <a href="" style={{ textDecoration: "none", fontSize: "1em" }}>
              Want to open an NRI account?
            </a>
            <p className="mt-2">
              By proceeding, you agree to the Zerodha{" "}
              <a href="" style={{ textDecoration: "none", fontSize: "1em" }}>
                terms & privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
