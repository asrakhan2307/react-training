import React from "react";
import people from "../assets/people.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      <section id="about" className="icons bg-light">
        <div className="flex-items flex-columns column">
          <div>
            <FontAwesomeIcon icon={faBuildingColumns} size="5x" />
            <div>
              <h3>Investment Banking</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, facilis?
              </p>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faBookOpenReader} size="5x" />
            <div>
              <h3>Portfolio Manager</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, facilis?
              </p>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faPencil} size="5x" />
            <div>
              <h3>Tax & Custodial</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, facilis?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="solutions flex-columns">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <img src={people} alt="" />
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-primary">
              <h4>What are you looking for</h4>
              <h2>We provide bespoke solutions</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
                natus tempore aperiam ea quod quibusdam eligendi pariatur quas
                dolor id?
              </p>
              <a href="blog.html" target="_self" className="btn btn-outline">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
