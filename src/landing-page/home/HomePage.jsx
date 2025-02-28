import "react";
import Hero from "./Hero";
import Education from "./Education";
import Pricing from "./Pricing";
import Stack from "./Stack";
import Awards from "./Awards";
import OpenAccount from "../OpenAccount";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stack />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}
