import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landing-page/home/HomePage.jsx";
import Signup from "./landing-page/signup/Signup.jsx";
import About from "./landing-page/About/About.jsx";
import ProductPage from "./landing-page/products/ProductPage.jsx";

import SupportPage from "./landing-page/support/SupportPage.jsx";
import Navbar from "./landing-page/Navbar.jsx";
import Footer from "./landing-page/Footer.jsx";

import PricingPage from "./landing-page/pricing/PricingPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
