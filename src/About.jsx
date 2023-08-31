import React from "react";

const About = () => {
  return (
    <section id="About" className="about__section">
      <div className="about__section-img">
        <img src={"[ABOUT]"} alt="ImageAboueMe" />
      </div>
      <div className="hero__section-contentBox about__section-box">
        <div className="hero__section-content">
          <p className="section__title">About</p>
          <h1 className="skills__section-heading">About me</h1>
          <p className="hero__section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eaque possimus inventore commodi. Fuga voluptas impedit illo animi
            quas at.
          </p>
          <p className="hero__section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eaque possimus inventore commodi. Fuga voluptas impedit illo animi
            quas at. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Iste, similique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
