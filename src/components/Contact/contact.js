import React, { useRef } from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import WhatsAppIcon from "../../assets/WhatsApp-Icon.jpeg";
import GitHubIcon from "../../assets/github-icon.png";
import LinkedInIcon from "../../assets/linkedin-icon.png";
// Installed EmailJs for email requirments and imported for use of mail
import emailjs from "@emailjs/browser";
import { openSocialMedia } from "../functionality";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dv6lwyb",
        "template_2nigt6r",
        form.current,
        "OcLgW9kE-GsmsdNFy"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <div className="contactInfo">
          <div className="contactDetails">
            <p>Mobile: '+91 (959) 039-7339'</p>
            <p>Email: 'amanmulla167@gmail.com'</p>
          </div>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="name"
              placeholder="Your Name"
              name="from_name"
            />
            <input
              type="email"
              className="email"
              placeholder="Your Email"
              name="your_email"
            />
            <input
              type="number"
              className="phno"
              placeholder="Mobile Number"
              name="your_mobile"
            />
            <textarea
              className="msg"
              name="message"
              placeholder="Your Message"
              rows={3}
            ></textarea>
          </form>
        </div>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
        <div className="links">
          <img
            src={FacebookIcon}
            alt="Facebook"
            className="link"
            onClick={() => openSocialMedia("facebook")}
          />
          <img
            src={TwitterIcon}
            alt="Twitter"
            className="link"
            onClick={() => openSocialMedia("twitter")}
          />
          <img
            src={YouTubeIcon}
            alt="Youtube"
            className="link"
            onClick={() => openSocialMedia("youtube")}
          />
          <img
            src={InstagramIcon}
            alt="Instagram"
            className="link"
            onClick={() => openSocialMedia("instagram")}
          />
          <img
            src={WhatsAppIcon}
            alt="WhatsApp"
            className="link"
            onClick={() => openSocialMedia("whatsapp")}
          />
          <img
            src={GitHubIcon}
            alt="GitHub"
            className="link"
            onClick={() => openSocialMedia("github")}
          />
          <img
            src={LinkedInIcon}
            alt="LinkedIn"
            className="link"
            onClick={() => openSocialMedia("linkedin")}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
