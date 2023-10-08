import React from "react";
import "./header.css";
import logo from "../../assets/logo.jpg";
import cantactImg from "../../assets/contact.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Experience</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={cantactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
    </header>
  );
};

export default Header;
