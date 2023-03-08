import "./Landing.css";
import React from "react";
import Header from "../Content/Header/Header";
import Hero from "../Content/Hero/Hero";
import Intro from "../Content/Intro/Intro";
import Features from "../Content/Features/Features";
import Uniquefeatures from "../Content/Uniquefeatures/Uniquefeatures";
import Roadmap from "../Content/Roadmap/Roadmap";
// Components

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Intro />
      <Features />
      <Uniquefeatures />
      <Roadmap />
    </div>
  );
};

export default Landing;
