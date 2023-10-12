import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.jpg";
import cantactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import { scrollToContactPage } from "../functionality";
import menu from '../../assets/hamBurger.jpeg'

const Header = () => {

  // I am Using React Hooks for the Hamburger show/hidden
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="expSection"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem"
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        onClick = {scrollToContactPage}>
  

        <img src={cantactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>

      <img src={menu} alt="menu" className="mobileMenuImg" onClick={()=>setShowMenu(!showMenu)}/>
      <div className="mobileMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="mobileMenuListItem"
          onClick={()=>setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="mobileMenuListItem"
          onClick={()=>setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="expSection"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="mobileMenuListItem"
          onClick={()=>setShowMenu(false)}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="mobileMenuListItem"
          onClick={()=>setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="mobileMenuListItem"
          onClick={()=>setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};


export default Header;
