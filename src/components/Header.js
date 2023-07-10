import { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  const scrollToHome = () => {
    window.scrollTo(0, 0);
  };

  window.onscroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    if (showNav) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  return (
    <header style={scroll ? { padding: "1rem 4rem" } : null}>
      <a href="#home" id="logo" onClick={scrollToHome}>
        <img src={logo} alt="Logo" />
      </a>
      <nav
        id="nav-desktop"
        style={
          showNav
            ? { visibility: "visible", opacity: "1", height: "16rem" }
            : null
        }
      >
        <a href="#home" onClick={scrollToHome}>
          Home
        </a>
        <a href="#services">Services</a>
        <a href="#blogs">Blog</a>
        <a href="#about">About</a>
        <a href="#contact">Contact Us</a>
      </nav>
      <button id="btn-nav" onClick={handleShowNav}>
        &#9776;
      </button>
    </header>
  );
};

export default Header;
