import React from "react";

import Brokerage from "./Brokerage";
import HeroPricing from "./HeroPricing";
import OpenAccount from "../OpenAccount";

export default function PricingPage() {
  return (
    <>
      <HeroPricing />
      <OpenAccount />
      <Brokerage />
    </>
  );
}
