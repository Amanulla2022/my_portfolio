import React from "react";
import "./intro.css";
import bg from "../../assets/my_image.jpeg";
import btnImg from "../../assets/hireme.png";
import dowbtnImg from "../../assets/d.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Amanulla</span> <br /> Front-end
          Developer
        </span>
        <p className="introPara">
          I am Skilled Front-end Developer with experience in creating <br />
          visually appealing, responsive and user freindly website.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="hire" className="btnImg" />
            Hire Me
          </button>
          <button className="btn" id="btn2">
            <img src={dowbtnImg} alt="hire" className="btnImg" id="dowBtn" />
            Resume
          </button>
        </Link>
      </div>
      <img src={bg} alt="my-profile" className="bg" />
    </section>
  );
};

export default Intro;
