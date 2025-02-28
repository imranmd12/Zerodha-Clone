import "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-buttom dflex-fixed">
      <div className="container p-2 ">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <form className="d-flex  ">
            <ul className="navbar-nav fs-6 mb-2 text-muted ">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/signup"
                >
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
          <i
            className="fa-solid fa-list "
            style={{ fontSize: "30px", position: "relative", right: "-50px" }}
          ></i>
        </div>
      </div>
    </nav>
  );
}
