import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <SectionTitle title="About Us" path="Home | About" />
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
      <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">We love our customers!</h2>
      <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pain in his shoulders is convenient, 
      as indeed the part they shared that which the times dictate, to be free from desires. The part 
      that is to repel, work to do, the pain in his shoulders a minimum, who flees almost by name, is 
      ready to enjoy the moment.
      </p>
      <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Contact Us</Link>
      </div>
    </div>
  );
};

export default About;
