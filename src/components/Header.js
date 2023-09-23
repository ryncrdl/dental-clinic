import { useState } from "react"
import logo from "../assets/logo.png"

const Header = () => {
  const [scroll, setScroll] = useState(false)

  const scrollToHome = () => {
    window.scrollTo(0, 0)
  }

  window.onscroll = () => {
    if (window.scrollY > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  return (
    <header style={scroll ? { padding: "1rem 4rem" } : null}>
      <a href="#home" id="logo" onClick={scrollToHome}>
        <img src={logo} alt="Logo" />
      </a>
      <button id="btn-nav">&#9776;</button>
      <nav id="nav-desktop">
        {/* <button id="btn-nav-close">&#x2715;</button> */}
        <a href="#home" onClick={scrollToHome}>
          Home
        </a>
        <a href="#services">Services</a>
        <a href="#blogs">Blog</a>
        <a href="#about">About</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  )
}

export default Header
