import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";

import "./utility.css";
import "./HomePage.css";
import Footer from "./Footer";
import About from "./About";
import Case from "./Case";
import Blog from "./Blog";
import Contact from "./Contact";
const Homepage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "President",
      image: person1,
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Vice President",
      image: person2,
    },
    {
      id: 3,
      name: "Steve Smith",
      role: "Marketing Head",
      image: person3,
    },
  ];
  return (
    <>
      {/* home section */}
      <header className="hero" id="home">
        <div id="navbar" className="navbar top">
          <h1 className="logo">
            <span className="text-primary">
              <FontAwesomeIcon icon={faBookOpen} /> Sky
            </span>
            Scrapper
          </h1>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#cases">Cases</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <h1>The Sky Is The Limit</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#about" className="btn">
            <FontAwesomeIcon icon={faChevronRight} /> Read More
          </a>
        </div>
      </header>
      <main>
        {/* about section */}
        <About />
        {/* Cases section */}
        <Case />
        {/* Blog section */}

        <Blog members={teamMembers} />
        {/* Contact section */}
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
