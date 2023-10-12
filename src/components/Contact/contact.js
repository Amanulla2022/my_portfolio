import React from "react";
import "./contact.css";
import Facebook from "../../assets/facebook.png.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm"></form>
        <input type="text" className="name" placeholder="Your Name" />
        <input type="email" className="email" placeholder="Your Email" />
        <textarea
          className="msg"
          name="message"
          placeholder="Your Message"
          rows={5}
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
        <div className="links">
          <img src={FacebookIcon} alt="Facebook" className="link" />
          <img src={TwitterIcon} alt="Twitter" className="link" />
          <img src={YouTubeIcon} alt="Youtube" className="link" />
          <img src={InstagramIcon} alt="Instagram" className="link" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
