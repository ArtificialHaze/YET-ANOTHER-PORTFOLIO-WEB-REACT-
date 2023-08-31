import React from "react";
import {
  Hero,
  Skills,
  About,
  Portfolio,
  Testimonials,
  Contact,
  Footer,
} from "./importExports";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
