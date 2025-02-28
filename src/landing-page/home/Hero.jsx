import "react";

export default function Hero() {
  return (
    <div className="container p-5 mb-5 ">
      <div className="row text-center mx-5">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="p-4 text-center"
          style={{ width: "90%", margin: "70px  60px " }}
        />
        <h1 className="mt-5 mb-3 text-muted" style={{ fontSize: "4em" }}>
          Invest in everything
        </h1>
        <p className="mt-2 mb-4 text-muted" style={{ fontSize: "1.5em" }}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary mt-3 mb-5"
          style={{ width: "20%", margin: "0 auto", fontSize: "1.5em" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}
