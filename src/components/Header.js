import { useState } from "react"
import logo from "../assets/logo.png"

const Header = () => {
  const [scroll, setScroll] = useState(false)

  window.onscroll = () => {
    if (window.scrollY > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  return (
    <header style={scroll ? { padding: "1rem 4rem" } : null}>
      <a href="#home" id="logo">
        <img src={logo} alt="Logo" />
      </a>
      <nav>
        <a href="#home">Home</a>
        <a href="#services-container">Services</a>
        <a href="#blog">Blog</a>
        <a href="#about">About</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  )
}

export default Header
