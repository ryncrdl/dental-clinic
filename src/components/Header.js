import { useEffect, useState } from "react"
import logo from "../assets/logo.png"

const Header = () => {
  const [scroll, setScroll] = useState(false)
  const [close, setClose] = useState(false)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  const scrollToHome = () => {
    window.scrollTo(0, 0)
    setClose(false)
  }

  window.onscroll = () => {
    setClose(false)
    if (window.scrollY > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    const updateInnerWidth = () => {
      setInnerWidth(window.innerWidth)
      setClose(false)
    }
    window.addEventListener("resize", updateInnerWidth)
    return () => {
      window.removeEventListener("resize", updateInnerWidth)
    }
  }, [])

  const onOpenNavigation = () => {
    setClose(true)
  }

  const onCloseNavigation = () => {
    setClose(false)
  }

  const responsiveNavagation = (
    <>
      <a href="#home" onClick={scrollToHome}>
        Home
      </a>
      <a href="#services-container" onClick={onCloseNavigation}>
        Services
      </a>
      <a href="#blogs-container" onClick={onCloseNavigation}>
        Blogs
      </a>
      <a href="#about" onClick={onCloseNavigation}>
        About
      </a>
      <a href="#contact" onClick={onCloseNavigation}>
        Contact Us
      </a>
    </>
  )

  return (
    <>
      {innerWidth <= 800 && (
        <nav id="res-nav" className={close ? "open" : null}>
          <button
            id="btn-nav-close"
            className={close ? "open" : "close"}
            onClick={() => onCloseNavigation()}
          >
            &#x2715;
          </button>
          {responsiveNavagation}
        </nav>
      )}
      <header
        style={
          scroll
            ? { padding: "clamp(0.5rem, 4vw, 1rem) clamp(1rem, 4vw, 2rem)" }
            : null
        }
      >
        <a href="#home" id="logo" onClick={scrollToHome}>
          <img src={logo} alt="Logo" />
        </a>
        <button id="btn-nav" onClick={onOpenNavigation}>
          &#9776;
        </button>
        {innerWidth > 800 && <nav id="nav-desktop">{responsiveNavagation}</nav>}
      </header>
    </>
  )
}

export default Header
