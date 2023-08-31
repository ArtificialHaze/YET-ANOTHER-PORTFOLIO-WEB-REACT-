import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavActive((prev) => !prev);
  };

  const closeNavbar = () => {
    setIsNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeNavbar();
      }

      window.addEventListener("resize", handleResize);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeNavbar();
    }
  }, []);

  return (
    <nav className={`navbar ${isNavActive ? "active" : ""}`}>
      <div>
        <img src="[LOGO]" alt="Logo" />
      </div>
      <a
        href="#"
        onClick={toggleNavbar}
        className={`nav__hamburger ${isNavActive ? "active" : ""}`}
      >
        <span className="nav__hamburger-line"></span>
        <span className="nav__hamburger-line"></span>
        <span className="nav__hamburger-line"></span>
      </a>
      <div className={`navbar__items ${isNavActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              activeClass="navbar--active-content"
              onClick={closeNavbar}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to={"Hero"}
              className="navbar__content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active-content"
              onClick={closeNavbar}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to={"Portfolio"}
              className="navbar__content"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active-content"
              onClick={closeNavbar}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to={"About"}
              className="navbar__content"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active-content"
              onClick={closeNavbar}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to={"Testimonials"}
              className="navbar__content"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
      <Link
        activeClass="navbar--active-content"
        onClick={closeNavbar}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to={"Contact"}
        className="btn btn-outline-primary"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
