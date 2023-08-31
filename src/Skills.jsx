import React from "react";
import data from "./data.json";

const Skills = () => {
  return (
    <section id="mySkills" className="skills__section">
      <div className="portfolio__container">
        <p className="section__title">My skills</p>
        <h2 className="skills__section-heading">My expertise</h2>
      </div>
      <div className="skills__section-container">
        {data?.skills?.map((skill, index) => (
          <div key={skill.id} className="skills__section-card">
            <div className="skills__section-img">
              <img src={skill.src} alt={skill.title} />
            </div>
            <div className="skills__section-cardContent">
              <h3 className="skills__section-title">{skill.title}</h3>
              <p className="skills__setion-description">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
