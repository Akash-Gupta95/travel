import React from "react";
import Img from "../Images/about-img.png";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="main-text">
          <h1>
            About<span>Us</span>
          </h1>
        </div>

        <div className="row">

          <div className="col-md-6 py-3 py-md-0">
            <div className="card">
              <img src={Img} alt="" />
             
            </div>
          </div>

            <div className="col-md-6 py-3 pymd-0">
            <h2>How Travel Agency Work</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                sapiente?
              </p>
              <button id="about-btn">Read More...</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
