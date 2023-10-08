import React from "react";
import "./projects.css";
import memesApp from "../../assets/MemesApp.jpeg";
import form from "../../assets/Form.jpeg";
import basicCalculator from "../../assets/Basic_Calculator.jpeg";
import rockpaperscissor from "../../assets/RPS.jpeg";
import musicPlayer from "../../assets/Music_Player.jpeg";
import portfolio from "../../assets/Portfolio.jpeg";

const Project = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">My Portfolio</h2>
      <span className="projectsDesc">
        These below Projects are Front-end Projects Which I have done for my
        Practice, In Training of Sapient as Front-End Developer and One Android
        Development Project, Which I have pushed on My GitHub Profile.
        <div className="projectsImgs">
          <img
            src={musicPlayer}
            alt="Music-Player"
            className="projectsImg"
          ></img>
          <img src={form} alt="Form" className="projectsImg"></img>
          <img src={portfolio} alt="Portfolio" className="projectsImg"></img>
          <img
            src={rockpaperscissor}
            alt="Rock-Paper-Scissor"
            className="projectsImg"
          ></img>
          <img src={memesApp} alt="MemesApp" className="projectsImg"></img>
          <img
            src={basicCalculator}
            alt="Basic-Calculator"
            className="projectsImg"
          ></img>
        </div>
        <button className="projectsBtn">See More</button>
      </span>
    </section>
  );
};

export default Project;
