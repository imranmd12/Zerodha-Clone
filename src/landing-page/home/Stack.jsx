import "react";

export default function stack() {
  return (
    <div>
      <div className="container p-4">
        <div className="row p-5">
          <div className="col-6 p-5 gap-3">
            <h1 className="fs-1 mb-5">Trust with confidence</h1>
            <h2 className="fs-2 text-muted">Customer-first always</h2>
            <p
              className="text-muted mt-3 mb-3 gap-3"
              style={{ fontSize: "18px" }}
            >
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
            <h2 className="fs-2 text-muted">No spam or gimmicks</h2>
            <p
              className="text-muted mt-3 mb-3 gap-3"
              style={{ fontSize: "18px" }}
            >
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
            <h2 className="fs-2 text-muted">The Zerodha universe</h2>
            <p className="text-muted mt-3 mb-3" style={{ fontSize: "18px" }}>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h2 className="fs-2 text-muted">Do better with money</h2>
            <p className="text-muted mt-3 mb-3" style={{ fontSize: "18px" }}>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-6 p-4 mt-5">
            <img
              src="media/images/ecosystem.png"
              alt="Ecosystem"
              style={{ width: "100%" }}
            />
            <div className="text-center">
              <a href="" className="mx-4">
                Explore our products <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="">
                Try Kite demo <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
