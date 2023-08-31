import React from "react";
import data from "./data.json";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section className="portfolio__section" id="Portfolio">
      <div className="portfolio__container-box">
        <div className="portfolio__container">
          <p className="subtitle">Recent projects</p>
          <h2 className="section__heading">My portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github">
            <FaGithub />
            Visit my github
          </button>
        </div>
      </div>
      <div className="portfolio__section-container">
        {data?.portfolio?.map((item, index) => (
          <div className="portfolio__section-card" key={item.id}>
            <div className="portfolio__section-img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="portfolio__section-card-content">
              <div>
                <h3 className="portfolio__section-title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio__link">
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
