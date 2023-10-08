import React from "react";
import "./skills.css";
import WebDevloper from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
import DSAjava from "../../assets/DSAjava.jpeg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate Front-end Developer with experience in web
        technology like HTML5 CSS3 SASS JavaScript with ES6 features and React
        and Have good Knowledge in Java, DSA and SQL, Also i have basic
        knowledge in Android Development with Kotlin
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDevloper} alt="Web-Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Front-End Developer</h2>
            <p>
              I am a skilled and passionate Front-end Developer with experience
              in web technology like HTML5 CSS3 SASS JavaScript with ES6
              features and React
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={DSAjava}
            alt="App-Design"
            className="skillBarImg"
            id="skillBarJavaImg"
          />
          <div className="skillBarText">
            <h2>DSA-Java</h2>
            <p>
              Have good Knowledge in Basic Java and also with DSA Intermidiate
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="App-Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Android Development</h2>
            <p>
              I have Basic Knowledge Android development with Kotlin, Done
              simple project called as Memes App
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
