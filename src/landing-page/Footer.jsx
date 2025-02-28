import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#" }}>
      <div className="container border-top mt-5 ">
        <div className="row mt-5 ">
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "60%" }}
              alt="logo"
            />
            <p className="lh-lg mt-3 ">
              &copy;2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col footer ">
            <h4 className="text-muted mb-3">Company</h4>
            <a href="">About </a>
            <br />
            <a href="">Products </a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Referral programme </a>
            <br />
            <a href="">Careers Zerodha.tech</a>
            <br />
            <a href="">Open source </a>
            <br />
            <a href="">Press & media </a>
            <br />
            <a href="">Zerodha Cares (CSR)</a>
            <br />
          </div>
          <div className="col">
            <h4 className="text-muted mb-3">Support</h4>

            <a href="">Support portal</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">List of charges</a>
            <br />
            <a href="">Downloads & resources</a>
            <br />
            <a href="">Videos</a>
            <br />
            <a href="">Market overview</a>
            <br />
            <a href="">How to file a complaint?</a>
            <br />
            <a href="">Status of your complaints</a>
          </div>
          <div className="col">
            <h4 className="text-muted mb-3">Account</h4>
            <a href="">Open an account</a>
            <br />

            <a href="">Fund transfer</a>
          </div>
        </div>
        <div className="mt-5 text-muted fs-7  ">
          <p className="lh-base">
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p className="lh-base">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <a href="">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </a>
          <br />
          <br />

          <p className="lh-base">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p className="lh-base">
            &quot;Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary.&quot; Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}
