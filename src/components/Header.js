import { useState } from "react"
import logo from "../assets/logo.png"

const Header = () => {
  const [scroll, setScroll] = useState(false)
  const [close, setClose] = useState(false)

  const scrollToHome = () => {
    window.scrollTo(0, 0)
    setClose(false)
  }

  window.onscroll = () => {
    if (window.scrollY > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const onOpenNavigation = () => {
    setClose(true)
  }

  const onCloseNavigation = () => {
    setClose(false)
  }

  return (
    <header
      style={
        scroll
          ? { padding: "clamp(0.5rem, 4vw, 1rem) clamp(2rem, 4vw, 4rem)" }
          : null
      }
    >
      <a href="#home" id="logo" onClick={onOpenNavigation}>
        <img src={logo} alt="Logo" />
      </a>
      <button id="btn-nav" onClick={onOpenNavigation}>
        &#9776;
      </button>
      <nav id="nav-desktop" className={close ? "open" : null}>
        <button
          id="btn-nav-close"
          className={close ? "open" : "close"}
          onClick={() => onCloseNavigation()}
        >
          &#x2715;
        </button>
        <a href="#home" onClick={scrollToHome}>
          Home
        </a>
        <a href="#services-container" onClick={() => onCloseNavigation()}>
          Services
        </a>
        <a href="#blogs-container" onClick={() => onCloseNavigation()}>
          Blog
        </a>
        <a href="#about" onClick={() => onCloseNavigation()}>
          About
        </a>
        <a href="#contact" onClick={() => onCloseNavigation()}>
          Contact Us
        </a>
      </nav>
    </header>
  )
}

export default Header
