import React from "react";

const Hero = () => {
  return (
    <section id="Hero" className="hero__section">
      <div className="hero__section-contentBox">
        <div className="hero__section-content">
          <p className="section__title">Hey, I am Vakho</p>
          <h1 className="hero__section-title">
            <span className="hero__section-titleColor">Front-end</span> <br />
            Developer
          </h1>
          <p className="hero__section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
            dignissimos!
            <br /> Lorem ipsum dolor sit amet.
          </p>
        </div>
        <button className="btn btn-primary hero__section-btn">
          Get in touch
        </button>
      </div>
      <div className="hero__section-img">
        <img src="[YOUR_IMAGE]" alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
