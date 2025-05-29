import React from "react";
import cases1 from "../assets/cases1.jpg";
import cases2 from "../assets/cases2.jpg";
import cases3 from "../assets/cases3.jpg";
const Case = () => {
  return (
    <div>
      <section id="cases" className="section-padding">
        <div className=" grid">
          <img src={cases1} alt="cases1" />
          <img src={cases2} alt="cases2" />
          <img src={cases3} alt="cases1" />
          <img src={cases2} alt="cases2" />
          <img src={cases1} alt="cases1" />
          <img src={cases2} alt="cases2" />
          <img src={cases1} alt="cases1" />
          <img src={cases2} alt="cases2" />
        </div>
      </section>
    </div>
  );
};

export default Case;
