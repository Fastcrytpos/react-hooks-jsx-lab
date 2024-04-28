import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Have you ever wondered if how somepeople do business without ever contacting customers but customers contacting them. Well a website and a greate social media presence is one way to do it. Im her to do that for you.</p>
    <img src={image} alt="I made this"/>
  </div>;
}

export default About;
