import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Counts from "../Components/Counts";
import FAQ from "../Components/FAQ";
import Features from "../Components/Features";
import Pricing from "../Components/Pricing";
import Services from "../Components/Services";
import Values from "../Components/Values";
import Footer from "../Components/Footer";

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Counts />
      <FAQ />
      <Features />
      <Pricing />
      <Services />
      <Values />
      <Footer />
    </div>
  );
};

export default Landing;
